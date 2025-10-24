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

export async function getUpdates() {
    return telegramBot("getUpdates", {
        allowed_updates: ["chat_member"]
    });
}

export async function createChatInviteLink(email?: string) {
    return telegramBot("createChatInviteLink", {
        chat_id: CHANNEL_ID,
        expire_date: Math.floor(Date.now() / 1000) + 2592000, // 1 month
        member_limit: 1,
        name: email
    });
}


/// base de datos

export async function checkUserSubscription(clerkId: string) {
    await dbConnect();
    const telegramSubscription = await TelegramSubscription.findOne({ user_clerk_id: clerkId }).lean();
    return serialize(telegramSubscription);
}
