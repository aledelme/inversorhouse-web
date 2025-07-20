import FixIncomeDetailView from "./view";
import { getHighVolumens } from "@/lib/high-volumens";
import { IHighVolumen } from "@/lib/models/HighVolumen";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const oportunidades: IHighVolumen[] = await getHighVolumens();
    const op = oportunidades.find(op => op._id === id);

    if (!op) {
        return <div>Opportunity not found</div>;
    }

    return <FixIncomeDetailView op={op} />;
}