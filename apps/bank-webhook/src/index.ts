import express from "express"
import { client } from "@repo/database/client"

const app = express()
const port = 3005
app.use(express.json())

app.post('/hdfc-webhook', async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: Number(req.body.user_identifier),
        amount: Number(req.body.amount)
    }
    try {
        await client.$transaction([
            client.balance.update({
                where: { userId: Number(req.body.user_identifier) },
                data: { amount: { increment: paymentInformation.amount } }
            }),
            client.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token,
                },
                data: {
                    status: "Success"
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

app.listen(port, () => {
    console.log("Server Started")
})