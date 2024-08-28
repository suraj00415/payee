import { client } from '@repo/database/client';
import { getServerSession } from 'next-auth';
import { P2PTranscationCard } from '../../../components/p2pTransactionCard';
import SendMoneyCard from '../../../components/SendMoneyCard';
import { Auth_Options } from '../../lib/auth';
async function p2pTransactionFetch() {
    const session = await getServerSession(Auth_Options);
    const txns = await client.p2pTransfer.findMany({
        where: {
            AND: [
                {
                    OR: [
                        { fromUserId: Number(session?.user?.id) },
                        { toUserId: Number(session?.user?.id) }]
                }
            ]

        },
        orderBy: {
            timestamp: 'desc'
        }
    });
    await client.$disconnect();
    return txns.map(t => ({
        timestamp: t.timestamp,
        amount: t.amount,
        fromUserId: t.fromUserId,
        toUserId: t.toUserId
    }))
}
export default async function P2P() {
    const p2pTransaction = await p2pTransactionFetch()
    const session = await getServerSession(Auth_Options)
    return (
        <div className='w-full flex  mx-10'>
            <div className='flex justify-center mt-10 w-full gap-10 '>
                <div className='w-full'>
                    <SendMoneyCard />
                </div>
                <div className='w-full'>
                    <P2PTranscationCard p2ptransactions={p2pTransaction} userId={session?.user?.id} />
                </div>
            </div>
        </div>
    )
}
