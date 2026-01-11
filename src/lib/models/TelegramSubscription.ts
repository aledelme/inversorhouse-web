
import mongoose, { Schema, Document, Model } from "mongoose";

const TelegramSubscriptionSchema = new Schema({
    _id: { type: String, required: true },
    email: { type: String, required: true },
    clerk_user_id: { type: String, required: true },
    stripe_user_id: { type: String, required: true },
    telegram_user_id: { type: String, required: false },
    purchase_date: { type: Date, default: Date.now },
    invite_link: { type: String, required: true },
    channel_access_date: { type: Date, required: false }
});


export type ITelegramSubscription = mongoose.InferSchemaType<typeof TelegramSubscriptionSchema>;

type ITelegramSubscriptionDocument = Document<string, ITelegramSubscription>;

const TelegramSubscription: Model<ITelegramSubscriptionDocument> =
    mongoose.models.TelegramChannelSubscription || mongoose.model<ITelegramSubscriptionDocument>('TelegramChannelSubscription', TelegramSubscriptionSchema);

export default TelegramSubscription;