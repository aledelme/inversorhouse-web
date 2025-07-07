'use server'
import dbConnect from "./dbConnect";
import Opportunity from "./models/Opportunity";


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

export async function getOpportunityById(id: number) {
    await dbConnect()
    const opportunity = await Opportunity.findById(id).lean();
    return serialize(opportunity);
}

