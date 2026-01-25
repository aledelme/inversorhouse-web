import { NextResponse } from 'next/server'
import { auth, currentUser } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: Request) {
    const { userId } = await auth();
    if (!userId)
        return NextResponse.json({ ok: false, message: "Usuario no autenticado" }, { status: 401 });
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email)
        return NextResponse.json({ ok: false, message: "Email no encontrado" }, { status: 400 });

    // TODO: Validar que el usuario no tenga ya una suscripción activa

    try {
        const headersList = await headers()
        const origin = headersList.get('origin')

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: process.env.STRIPE_TELEGRAM_CHANNEL_ID_PRODUCT,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            customer_email: email,
            success_url: `${origin}/telegram-channel/success?session_id={CHECKOUT_SESSION_ID}`,
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