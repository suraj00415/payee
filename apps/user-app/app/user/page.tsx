import { getServerSession } from 'next-auth'
import { Auth_Options } from '../lib/auth'

export default async function page() {
    const session = await getServerSession(Auth_Options)
    return (
        <div className='text-white'>User: {JSON.stringify(session)}</div>
    )
}