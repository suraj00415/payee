"use client"
import { Button } from '@repo/ui/button'
import { Card } from '@repo/ui/card'
import { TextInput } from '@repo/ui/textInput'
import React, { useState } from 'react'
import { p2pTransfer } from '../app/lib/actions/p2pTransfer'

export default function SendMoneyCard() {
    const [phone, setPhone] = useState("")
    const [amount, setAmount] = useState(0)
    return (
        <div>
            <Card title='Send Money To Recipient'>
                <div className='w-full'>
                    <TextInput placeholder='Add Phone Number' label='Phone' onChange={(value: string) => setPhone(value)} />
                    <TextInput placeholder='Add Amount' label='Amount' onChange={(value) => setAmount(Number(value))} />
                    <div className='w-full items-center justify-center flex mt-4'>
                        <Button onClick={async () => {
                            const res = await p2pTransfer(phone, amount * 100)
                            console.log(res)
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
