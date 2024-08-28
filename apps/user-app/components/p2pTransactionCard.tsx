import { Card } from "@repo/ui/card"

export const P2PTranscationCard = ({
    p2ptransactions, userId
}: {
    p2ptransactions: {
        amount: number,
        timestamp: Date,
        fromUserId: number,
        toUserId: number
    }[],
    userId: number
}) => {
    if (!p2ptransactions.length) {
        return <Card title="Recent p2pTransactions">
            <div className="text-center pb-8 pt-8">
                No Recent P2PTransactions
            </div>
        </Card>
    }
    return (
        <Card title="Recent P2PTransactions">
            <div className="pt-2">
                {p2ptransactions.map(t => <div className="flex justify-between border-b border-slate-600 my-2">
                    <div className="mb-1">
                        <div className="text-sm">
                            Received INR
                        </div>
                        <div className="text-slate-400 text-xs flex gap-3 ">
                            <div>
                                {t.timestamp.toDateString()}
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        {userId == t.toUserId && <div className="bg-slate-700 rounded-lg p-1 text-green-500 border border-slate-500">
                            + {t.amount / 100} INR
                        </div>}
                        {userId == t.fromUserId && <div className="bg-slate-700 rounded-lg p-1 text-red-500 border border-slate-500">
                            - {t.amount / 100} INR
                        </div>}
                    </div>
                </div>)}
            </div>
        </Card>
    )
}