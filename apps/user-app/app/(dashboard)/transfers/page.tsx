import { client } from "@repo/database/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactionCard";
import { getServerSession } from "next-auth";
import { Auth_Options } from "../../lib/auth";

async function getBalance() {
    const session = await getServerSession(Auth_Options);
    const balance = await client.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    await client.$disconnect();
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(Auth_Options);
    const txns = await client.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        },
        orderBy: {
            startTime: 'desc'
        }
    });
    await client.$disconnect();
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function () {
    const session = await getServerSession(Auth_Options)

    const balance = await getBalance();
    const transactions = await getOnRampTransactions();

    return <div className="w-full">
        <div className="text-4xl bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent pt-8 mb-8 font-bold">
            Transfers
        </div>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 p-4">
            <div>
                <AddMoney />
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div className="pt-4">
                    <OnRampTransactions transactions={transactions} />
                </div>
            </div>
        </div>
    </div>
}