import { Card } from "@repo/ui/card"

export type Status = "Processing" | "Failure" | "Success"
export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: Status,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return (
        <Card title="Recent Transactions">
            <div className="pt-2">
                {transactions.map(t => <div className="flex justify-between border-b border-slate-600 my-2">
                    <div className="mb-1">
                        <div className="text-sm">
                            Received INR
                        </div>
                        <div className="text-slate-400 text-xs flex gap-3 ">
                            <div>
                                {t.time.toDateString()}
                            </div>
                            {
                                t.status == "Processing" && <div className="text-yellow-500 font-medium bg-slate-700 border border-slate-500 px-2 rounded-lg">{t.status}</div>
                            }
                            {
                                t.status == "Success" && <div className="text-green-500 font-medium bg-slate-700 border border-slate-500 px-2 rounded-lg">{t.status}</div>
                            }
                            {
                                t.status == "Failure" && <div className="text-red-500 font-medium bg-slate-700 border border-slate-500 px-2 rounded-lg">{t.status}</div>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div className="bg-slate-700 rounded-lg p-1 text-green-500 border border-slate-500">
                            {t.amount / 100} INR
                        </div>
                    </div>
                </div>)}
            </div>
        </Card>
    )
}