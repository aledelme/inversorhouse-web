import FixIncomeDetailView from "./view";
import { getFixIncomes } from "@/lib/fix-incomes";
import { IFixIncome } from "@/lib/models/FixIncome";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const oportunidades: IFixIncome[] = await getFixIncomes();
    const op = oportunidades.find(op => op._id === id);

    if (!op) {
        return <div>Opportunity not found</div>;
    }

    return <FixIncomeDetailView op={op} />;
}