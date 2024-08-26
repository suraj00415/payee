import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { Auth_Options } from "./lib/auth";

export default async function Page() {
  const session = await getServerSession(Auth_Options);
  if (session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}