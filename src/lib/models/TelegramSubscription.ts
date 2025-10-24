
import mongoose, { Schema, Document, Model } from "mongoose";

const TelegramSubscriptionSchema = new Schema({
    _id: { type: String, required: true },
    user_clerk_id: { type: String, required: true },
    user_telegram_id: { type: String, required: false },
    email: { type: String, required: true },
    subscribed_at: { type: Date, default: Date.now },
    invite_link: { type: String, required: true }
});


export type ITelegramSubscription = mongoose.InferSchemaType<typeof TelegramSubscriptionSchema>;

type ITelegramSubscriptionDocument = Document<string, ITelegramSubscription>;

const TelegramSubscription: Model<ITelegramSubscriptionDocument> =
    mongoose.models.TelegramChannelSubscription || mongoose.model<ITelegramSubscriptionDocument>('TelegramChannelSubscription', TelegramSubscriptionSchema);

export default TelegramSubscription;