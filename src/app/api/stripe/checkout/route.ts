import { NextResponse } from 'next/server'
import { auth, currentUser } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
    const { userId } = await auth();
    if (!userId)
        return NextResponse.json({ ok: false, message: "Usuario no autenticado" }, { status: 401 });
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email)
        return NextResponse.json({ ok: false, message: "Email no encontrado" }, { status: 400 });

    // Get plan type from request body
    const formData = await request.formData();
    const plan = formData.get('plan') || 'monthly';

    // Select the correct price ID based on plan
    const priceId = plan === 'quarterly'
        ? process.env.STRIPE_TELEGRAM_CHANNEL_ID_PRODUCT_QUARTERLY
        : process.env.STRIPE_TELEGRAM_CHANNEL_ID_PRODUCT;

    // TODO: Validar que el usuario no tenga ya una suscripción activa

    try {
        const headersList = await headers()
        const origin = headersList.get('origin')        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            customer_email: email,
            success_url: `${origin}/telegram-channel/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/telegram-channel`,
            consent_collection: {
                terms_of_service: 'required',
            }, custom_text: {
                terms_of_service_acceptance: {
                    message: `Al suscribirte, aceptas los [Términos y Condiciones](${origin}/telegram-channel/terminos-y-condiciones) y la [Política de Privacidad](${origin}/telegram-channel/privacidad) del Canal de Telegram.`,
                },
            },

            // 1. Obliga a recoger la dirección (necesaria para validar el NIF y aplicar el IVA correcto por país)
            billing_address_collection: 'required',
            // 2. Habilita el campo para introducir el NIF/CIF/VAT Number
            tax_id_collection: {
                enabled: true,
            },
            // 3. Activa Stripe Tax para cálculo automático de IVA (Recomendado)
            automatic_tax: {
                enabled: true,
            },
        });
        return NextResponse.redirect(session.url, 303)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
        // return new Response(JSON.stringify({ message: "Cancelado" }), {
        //     status: 404,
        //     headers: { "Content-Type": "application/json" },
        // });
    }
}