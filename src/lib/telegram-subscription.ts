// filepath: c:\Users\aleja\Documents\proyectos-web\inversorhouse-web\src\lib\telegramSubscription.ts
import dbConnect from './dbConnect';
import TelegramSubscription, { ITelegramSubscription } from './models/TelegramSubscription';

/**
 * Guarda una nueva suscripción cuando es pagada a través de Stripe
 */
export async function createTelegramSubscription(data: {
    clerk_user_id: string;
    stripe_user_id: string;
    invite_link: string;
}): Promise<ITelegramSubscription> {
    await dbConnect();

    const subscription = new TelegramSubscription({
        _id: `${data.clerk_user_id}_${Date.now()}`,
        clerk_user_id: data.clerk_user_id,
        stripe_user_id: data.stripe_user_id,
        invite_link: data.invite_link,
        purchase_date: new Date(),
        status: 'active',
    })
    await subscription.save();
    return subscription.toObject() as unknown as ITelegramSubscription;
}

/**
 * Actualiza una suscripción como cancelada cuando se recibe el evento de Stripe
 */
export async function cancelTelegramSubscription(
    stripe_user_id: string
): Promise<ITelegramSubscription | null> {
    await dbConnect()
    const subscription = await TelegramSubscription.findOneAndUpdate(
        { stripe_user_id, status: 'active' },
        { status: 'canceled' },
        { new: true }
    );

    return subscription ? (subscription.toObject() as unknown as ITelegramSubscription) : null;
}

/**
 * Obtiene una suscripción por ID de usuario de Clerk
 */
export async function getTelegramSubscriptionByClerkId(
    clerk_user_id: string
): Promise<ITelegramSubscription | null> {
    await dbConnect();

    const subscription = await TelegramSubscription.findOne({ clerk_user_id }).sort({ purchase_date: -1 });
    return subscription ? (subscription.toObject() as unknown as ITelegramSubscription) : null;
}

/**
 * Obtiene una suscripción por ID de usuario de Stripe
 */
export async function getTelegramSubscriptionByStripeId(
    stripe_user_id: string
): Promise<ITelegramSubscription | null> {
    await dbConnect();

    const subscription = await TelegramSubscription.findOne({ stripe_user_id }).sort({ purchase_date: -1 });
    return subscription ? (subscription.toObject() as unknown as ITelegramSubscription) : null;
}

/**
 * Obtiene una suscripción por ID de usuario de Telegram
 */
export async function getTelegramSubscriptionByTelegramId(
    telegram_user_id: string
): Promise<ITelegramSubscription | null> {
    await dbConnect();

    const subscription = await TelegramSubscription.findOne({ telegram_user_id }).sort({ purchase_date: -1 });
    return subscription ? (subscription.toObject() as unknown as ITelegramSubscription) : null;
}

/**
 * Actualiza la fecha de acceso al canal y el ID de usuario de Telegram
 */
export async function updateChannelAccessDate(
    invite_link: string,
    telegram_user_id: string
): Promise<ITelegramSubscription | null> {
    await dbConnect();

    const subscription = await TelegramSubscription.findOneAndUpdate(
        { invite_link },
        {
            channel_access_date: new Date(),
            telegram_user_id,
        },
        { new: true }
    );

    return subscription ? (subscription.toObject() as unknown as ITelegramSubscription) : null;
}


