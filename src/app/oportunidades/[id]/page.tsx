import { IOpportunity } from "@/services/models/Opportunity";
import { getOpportunities } from "@/services/opportunities";
import OpportunityDetailView from "./view";


export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    const oportunidade: IOpportunity[] = await getOpportunities();
    const op = oportunidade.find(op => op._id === id);

    if (!op) {
        return <div>Opportunity not found</div>;
    }

    return <OpportunityDetailView op={op} />;
}