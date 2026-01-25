
import { updateChannelAccessDate } from '@/lib/telegram-subscription';
import { banChatMember } from '@/lib/telegram-bot';

export interface TelegramUpdate {
    update_id: number;
    chat_member?: ChatMemberUpdate;
}

export interface ChatMemberUpdate {
    chat: Chat;
    from: User;
    date: number;
    old_chat_member: ChatMemberStatus;
    new_chat_member: ChatMemberStatus;
    invite_link?: InviteLink;
}

export interface Chat {
    id: number;
    title: string;
    type: string; // Puede ser 'channel', 'group', 'supergroup' o 'private'
}

export interface User {
    id: number;
    is_bot: boolean;
    first_name: string;
    username?: string;
    last_name?: string;
}

export interface ChatMemberStatus {
    user: User;
    status: string; // Ej: 'left', 'member', 'kicked'
}

export interface InviteLink {
    invite_link: string;
    name: string;
    creator: User;
    member_limit?: number;
    creates_join_request: boolean;
    is_primary: boolean;
    is_revoked: boolean;
}

export async function POST(request: Request) {
    const headers = request.headers;
    if (headers.get("x-telegram-bot-api-secret-token") !== process.env.TELEGRAM_SECRET_TOKEN_WEBHOOK) {
        return new Response("Unauthorized", { status: 401 });
    }

    const body = await request.json() as TelegramUpdate;
    if (!body.chat_member) {
        return new Response("Bad Request", { status: 400 });
    }

    if (body.chat_member.chat.id !== Number(process.env.TELEGRAM_CHAT_ID)) {
        console.log(`Forbidden. Received chat ID ${body.chat_member.chat.id} does not match expected ${process.env.TELEGRAM_CHAT_ID}`);
        return new Response("Forbidden. Not the correct chat", { status: 403 });
        // console.log("Forbidden. Not the correct chat");
    } const user = body.chat_member.new_chat_member.user;
    const telegramUserId = user.id;

    if (user.is_bot) {
        // Expulsar y banear bots permanentemente
        try {
            await banChatMember(telegramUserId);
        } catch (error) {
            console.error('Error banning bot:', error);
        }
        return new Response("Bot banned", { status: 200 });
    }

    // Verificar si es una salida del canal (sin invite_link)
    if (!body.chat_member.invite_link) {
        // Es una salida/eliminación de usuario. Solo logueamos
        console.log(`User ${telegramUserId} left or was removed from the channel`);
        return new Response("User removal logged", { status: 200 });
    }

    // Usuario se unió al canal mediante invite_link
    const inviteLink = body.chat_member.invite_link.invite_link;
    const email = body.chat_member.invite_link.name; // El nombre del link contiene el email

    // Vincular el telegram_user_id con la suscripción existente
    const subscription = await updateChannelAccessDate(inviteLink, String(telegramUserId));

    if (!subscription) {
        console.error(`No subscription found for invite link: ${inviteLink}`);
        return new Response("Subscription not found", { status: 404 });
    }

    console.log(`Successfully linked Telegram user ${telegramUserId} (${email}) to subscription ${subscription._id}`);

    return new Response("Telegram user linked successfully", { status: 200 });
}