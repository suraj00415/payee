"use client"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function NavBar() {
    const session = useSession()
    const router = useRouter()
    return (
        <div className="bg-zinc-700 flex justify-around items-center gap-10 p-4">
            <div className='text-xl font-bold text-white'>
                PayTM
            </div>
            <div className='text-lg font-bold text-white'>
                {session.data?.user?.email}
            </div>
            <div className='flex gap-4'>
                <div><button className='bg-blue-500 p-2 rounded-lg' onClick={() => router.push('/api/auth/signin')}>Login</button></div>
                <button className='bg-blue-500 p-2 rounded-lg' onClick={() => signOut()}>Logout</button>
            </div>
        </div>
    )
}
