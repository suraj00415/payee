"use server";
import { client } from "@repo/database/client";
import { getServerSession } from "next-auth";
import { Auth_Options } from "../auth";

export async function createOnRampTransaction(provider: string, amount: number) {
    const session = await getServerSession(Auth_Options);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }
    const token = (Math.random() * 1000).toString();
    await client.onRampTransaction.create({
        data: {
            provider,
            status: "Processing",
            startTime: new Date(),
            token: token,
            userId: Number(session?.user?.id),
            amount: amount * 100
        }
    });

    return {
        message: "Done"
    }
}
