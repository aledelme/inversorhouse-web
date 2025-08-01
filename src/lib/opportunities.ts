'use server'

import dbConnect from './dbConnect';
import Opportunity from "@/lib/models/Opportunity";
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
    const opportunities = await Opportunity.find().lean();
    return serialize(opportunities);
}

export async function getOpportunityById(id: string) {
    await dbConnect()
    console.log(id)
    if (!mongoose.Types.ObjectId.isValid(id)) console.error("Invalid ID format:", id)
    const _id = new mongoose.Types.ObjectId(id.trim());
    console.log(_id)
    const opportunity = await Opportunity.findById(_id)//.lean();
    console.log(opportunity)
    return serialize(opportunity);
}

export async function getOpportunityByRefCode(refCode: string) {
    await dbConnect()
    const opportunity = await Opportunity.findOne({ ref_code: refCode }).lean();
    console.log(opportunity)
    return serialize(opportunity);
}