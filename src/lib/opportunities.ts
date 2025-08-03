'use server'

import dbConnect from './dbConnect';
import Opportunity, { OpportunityStatus } from "@/lib/models/Opportunity";
import mongoose from 'mongoose';

// Convierte _id y otros campos especiales a string
function serialize(doc) {
    if (!doc) return doc;
    if (Array.isArray(doc)) return doc.map(serialize);
    return {
        ...doc,
        _id: doc._id?.toString?.() ?? doc._id,
    };
}

export async function getOpportunities() {
    await dbConnect()
    const opportunities = await Opportunity.find({ status: { $ne: OpportunityStatus.CLOSED } }).sort({ _id: -1 }).lean();
    return serialize(opportunities);
};

export async function getOpportunityById(id: string) {
    await dbConnect()
    if (!mongoose.Types.ObjectId.isValid(id)) console.error("Invalid ID format:", id)
    const _id = new mongoose.Types.ObjectId(id.trim());
    const opportunity = await Opportunity.findById(_id).lean();
    return serialize(opportunity);
}

export async function getOpportunityByRefCode(refCode: string) {
    await dbConnect()
    const opportunity = await Opportunity.findOne({ ref_code: refCode }).lean();
    return serialize(opportunity);
}