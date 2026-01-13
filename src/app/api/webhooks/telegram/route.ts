
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
        return new Response("Forbidden. Not the correct chat", { status: 403 });
        // console.log("Forbidden. Not the correct chat");
    }

    const user = body.chat_member.new_chat_member.user;
    // const telegramUserId = user.id;
    // const firstName = user.first_name;
    // const lastName = user.last_name;
    // const username = user.username;
    if (user.is_bot) {
        // Kick out bot and perma ban TODO
        return new Response("Ignored bot event", { status: 200 });
    }

    if (!body.chat_member.invite_link) {
        // It's a user removal. Save to the database TODO
        return new Response("Event saved", { status: 200 });
    }

    // const inviteLink = body.chat_member.invite_link.invite_link;
    // const email = body.chat_member.invite_link.name; // The link's name contains the email

    return new Response("Webhook received");
}