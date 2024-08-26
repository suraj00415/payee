import express from "express"
import { client } from "@repo/database/client"

const app = express()
app.post('/hdfc-webhook', async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }
    try {
        await client.$transaction([
            client.balance.update({
                where: { userId: req.body.userId },
                data: { amount: { increment: paymentInformation.amount } }
            }),
            client.onRampTransaction.updateMany({
                where: {
                    status: "Success"
                },
                data: {
                    token: paymentInformation.token,
                }
            })])
        return res.json({ message: "Captured" })
    } catch (error) {
        console.log(error)
        return res.status(411).json({ message: "Error while processing the webhook" })
    }
    finally {
        await client.$disconnect();
    }
})
