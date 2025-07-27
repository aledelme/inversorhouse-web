
import { getOpportunityById } from "@/lib/opportunities";
import OpportunityDetailView from "./view";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const op = await getOpportunityById(id);

    if (!op) {
        return <div>Opportunity not found</div>;
    }

    return <OpportunityDetailView op={op} />;
}