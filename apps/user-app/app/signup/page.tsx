import React from 'react'

export default function SignUp() {
    return (
        <div className='flex gap-10 dark:text-white p-5'>
            <div>
                <div>Full Name</div>
                <input className='rounded-lg p-2 bg-zinc-600' type="text" placeholder='full name' />
            </div>
            <div>
                <div>Username</div>
                <input className='rounded-lg p-2 bg-zinc-600' type="text" placeholder='username' />
            </div>
            <div>
                <div>Password</div>
                <input className='rounded-lg p-2 bg-zinc-600' type="password" placeholder='password' />
            </div>
        </div>
    )
}
