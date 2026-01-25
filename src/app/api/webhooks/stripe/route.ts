import { NextRequest, NextResponse } from 'next/server';
import { stripe, getCustomer } from '@/lib/stripe';
import Stripe from 'stripe';
import { createChatInviteLink, removeChatMember } from '@/lib/telegram-bot';
import { createTelegramSubscription, cancelTelegramSubscription, getTelegramSubscriptionByStripeId } from '@/lib/telegram-subscription';
import { getUserByEmail } from '@/lib/clerk';
import { sendEmail } from '@/utils/notifications';
import { generateWelcomeEmail, generateFarewellEmail } from '@/utils/email-templates';

export async function POST(request: NextRequest) {
    try {
        // Para webhooks de Stripe, necesitas el raw body
        const body = await request.text();
        const signature = request.headers.get('stripe-signature');

        if (!signature) {
            return NextResponse.json(
                { error: 'No signature found' },
                { status: 400 }
            );
        }

        // Verifica la firma del webhook
        let event: Stripe.Event;
        try {
            event = stripe.webhooks.constructEvent(
                body,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET!
            );
        } catch (err) {
            console.error('Webhook signature verification failed:', err);
            return NextResponse.json(
                { error: 'Invalid signature' },
                { status: 400 }
            );
        }        // Obtener Id Stripe del cliente
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        // Obtener Email del cliente de Stripe
        const customer = await getCustomer(customerId) as Stripe.Customer;
        const customerEmail = customer.email;

        if (!customerEmail) {
            console.error('Customer email not found');
            return NextResponse.json({ error: 'Customer email not found' }, { status: 400 });
        }

        // Obtener datos del cliente de Clerk usando el email
        const clerkUser = await getUserByEmail(customerEmail);
        const userName = clerkUser?.fullName || clerkUser?.firstName || customerEmail.split('@')[0];

        // Maneja el evento
        switch (event.type) {
            case 'customer.subscription.created': {
                // Crear enlace de invitación al canal de Telegram
                const inviteLinkResponse = await createChatInviteLink(customerEmail);
                const inviteLink = inviteLinkResponse.result?.invite_link;

                if (!inviteLink) {
                    console.error('Failed to create Telegram invite link');
                    return NextResponse.json({ error: 'Failed to create invite link' }, { status: 500 });
                }

                // Guardar suscripción en base de datos
                await createTelegramSubscription({
                    clerk_user_id: clerkUser?.id || customerId,
                    stripe_user_id: customerId,
                    invite_link: inviteLink,
                });

                // Enviar email de bienvenida con link de invitación
                const welcomeHtml = generateWelcomeEmail({
                    userName,
                    inviteLink,
                });

                await sendEmail({
                    to: customerEmail,
                    subject: '🎉 ¡Bienvenido a InversorHouse Premium! - Tu acceso al canal exclusivo',
                    html: welcomeHtml,
                });

                console.log(`Subscription created for ${customerEmail}`);
                break;
            }
            case 'customer.subscription.deleted': {
                // Buscar suscripción en base de datos
                const existingSubscription = await getTelegramSubscriptionByStripeId(customerId);

                // Marcar suscripción como cancelada
                await cancelTelegramSubscription(customerId);

                // Eliminar usuario del canal de Telegram si tiene telegram_user_id
                if (existingSubscription?.telegram_user_id) {
                    try {
                        await removeChatMember(Number(existingSubscription.telegram_user_id));
                    } catch (error) {
                        console.error('Error removing user from Telegram channel:', error);
                    }
                }

                // Enviar email de despedida
                const farewellHtml = generateFarewellEmail({
                    userName,
                });

                await sendEmail({
                    to: customerEmail,
                    subject: 'Hasta pronto - Tu suscripción a InversorHouse Premium ha sido cancelada',
                    html: farewellHtml,
                });

                console.log(`Subscription cancelled for ${customerEmail}`);
                break;
            }
            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return NextResponse.json({ received: true }, { status: 200 });

    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 500 }
        );
    }
}