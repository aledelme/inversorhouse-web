
import { getOpportunities } from "@/lib/opportunities";
import OpportunitiesView from "./view";
import { IOpportunity } from "@/lib/models/Opportunity";

export default async function Page() {
    const opportunities: IOpportunity[] = await getOpportunities();
    // El filtrado será del lado del cliente, así que usamos un componente cliente
    return <OpportunitiesView opportunities={opportunities} />;
}

