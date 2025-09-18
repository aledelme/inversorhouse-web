import mongoose, { Schema, Document, Model } from "mongoose";

export enum OpportunityStatus {
  COMPLETED = "COMPLETED",
  CLOSED = "CLOSED",
}

export enum LegalStatus {
  REO = "REO", // Real Estate Owned
}

const OpportunitySchema = new Schema({
  _id: { type: String, required: true },
  // procedure_type: { type: String, required: true },
  // property_type: { type: String, required: true },
  sub_property_type: { type: String, required: true },
  // typology: { type: String, required: true },
  state: { type: String, required: true },
  province: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  zip_code: { type: String, required: true },
  ref_code: { type: String, required: true },
  ask_price: { type: Number, required: true },
  squatted: { type: Boolean, required: true },
  min_idealista: { type: Number, required: true },
  max_idealista: { type: Number, required: true },
  starred: { type: Boolean, default: false },
  file_key: { type: String, required: false },
  status: { type: String, required: false, enum: Object.values(OpportunityStatus) },
  legal_status: { type: String, required: false, enum: Object.values(LegalStatus) },
  ns_key: { type: String, required: false }, // Nota simple
});


export type IOpportunity = mongoose.InferSchemaType<typeof OpportunitySchema>;

type IOpportunityDocument = Document<string, IOpportunity>;

const Opportunity: Model<IOpportunityDocument> = mongoose.models.Opportunity || mongoose.model<IOpportunityDocument>('Opportunity', OpportunitySchema);

export default Opportunity;
