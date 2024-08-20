import { NextResponse } from "next/server";
import { client } from "@repo/database/client"
import { getServerSession } from "next-auth";
import { Auth_Options } from "../../lib/auth";

export const GET = async () => {
    const session = await getServerSession(Auth_Options)
    if (session.user) {
        return NextResponse.json({ user: session.user })
    }
    return NextResponse.json({ message: "You are not logged In" }, { status: 403 })
}