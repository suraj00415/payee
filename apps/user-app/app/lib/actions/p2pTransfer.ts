"use server"
import { getServerSession } from "next-auth";
import { Auth_Options } from "../auth";
import { client } from "@repo/database/client";

export async function p2pTransfer(to: string, amount: number) {
    const session = await getServerSession(Auth_Options);
    const from = session?.user?.id;
    if (!from) {
        return {
            message: "Error while sending"
        }
    }
    const toUser = await client.user.findFirst({
        where: {
            number: to
        }
    });

    if (!toUser) {
        return {
            message: "User not found"
        }
    }
    await client.$transaction(async (tx) => {
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
        const fromBalance = await tx.balance.findUnique({
            where: { userId: Number(from) },
        });
        if (!fromBalance || fromBalance.amount < amount) {
            throw new Error('Insufficient funds');
        }

        await tx.balance.update({
            where: { userId: Number(from) },
            data: { amount: { decrement: amount } },
        });

        await tx.balance.update({
            where: { userId: toUser.id },
            data: { amount: { increment: amount } },
        });
        await tx.p2pTransfer.create({
            data: {
                amount,
                timestamp: new Date(),
                fromUserId: Number(session?.user?.id),
                toUserId: Number(toUser.id)
            }
        })
    });
}