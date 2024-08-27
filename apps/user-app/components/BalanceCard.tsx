import { Card } from "@repo/ui/card";

export const BalanceCard = ({ amount, locked }: {
    amount: number;
    locked: number;
}) => {
    return <Card title={"Balance"}>
        <div className="flex justify-between border-b border-slate-600 pb-3 pt-2">
            <div>
                Unlocked balance
            </div>
            <div className="bg-slate-700 rounded-lg p-1  border border-slate-600 ">
                {amount / 100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-600 py-3">
            <div>
                Total Locked Balance
            </div>
            <div className="bg-slate-700 rounded-lg p-1  border border-slate-600">
                {locked / 100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-600 py-3">
            <div>
                Total Balance
            </div>
            <div className="bg-slate-700 rounded-lg p-1  border border-slate-600">
                {(locked + amount) / 100} INR
            </div>
        </div>
    </Card>
}