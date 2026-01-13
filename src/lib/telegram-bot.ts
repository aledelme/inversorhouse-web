"use server"

import { serialize } from "@/utils/functions";
import dbConnect from "./dbConnect";
import TelegramSubscription from "./models/TelegramSubscription";

const CHANNEL_ID = process.env.TELEGRAM_CHAT_ID;

async function telegramBot(method: string, params: unknown) {
    const response = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/${method}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });

    if (!response.ok)
        throw new Error(`Error: ${response.statusText}`);

    return response.json();
}

export async function createChatInviteLink(email?: string) {
    return telegramBot("createChatInviteLink", {
        chat_id: CHANNEL_ID,
        expire_date: Math.floor(Date.now() / 1000) + 2592000, // 1 month
        member_limit: 1,
        name: email
    });
}

/**
 * Kicks a user from the chat (channel). By defaults, "unbanChatMember" also bans the user and allows them to rejoin.
 * @param telegramUserId 
 * @returns 
 */
export async function removeChatMember(telegramUserId: number) {
    return telegramBot("unbanChatMember", {
        chat_id: CHANNEL_ID,
        user_id: telegramUserId
    });

}

/**
 * Bans a user from the channel permanently.
 * @param telegramUserId 
 * @returns 
 */
export async function banChatMember(telegramUserId: number) {
    return telegramBot("banChatMember", {
        chat_id: CHANNEL_ID,
        user_id: telegramUserId
    });
}

/// base de datos

export async function checkUserSubscription(clerkId: string) {
    await dbConnect();
    const telegramSubscription = await TelegramSubscription.findOne({ user_clerk_id: clerkId }).lean();
    return serialize(telegramSubscription);
}
