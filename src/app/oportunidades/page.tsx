
import { getOpportunities } from "@/services/opportunities";
import OpportunitiesView from "./view";
import { IOpportunity } from "@/services/models/Opportunity";





export default async function Page() {
    const opportunities: IOpportunity[] = await getOpportunities();

    // El filtrado será del lado del cliente, así que usamos un componente cliente
    return <OpportunitiesView opportunities={opportunities} />;
}

