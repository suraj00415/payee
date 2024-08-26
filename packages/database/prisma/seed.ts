import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
const client = new PrismaClient()

async function main() {
    const alice = await client.user.upsert({
        where: { number: "111" },
        update: {},
        create: {
            number: '111',
            name: "alice",
            password: await bcrypt.hash('alice', 10),
            Balance: {
                create: {
                    amount: 3000,
                    locked: 0
                }
            },
            OnRampTransaction: {
                create: {
                    amount: 1000,
                    status: "Success",
                    startTime: new Date(),
                    token: "122",
                    provider: "HDFC Bank",
                }
            }
        }
    })
    const bob = await client.user.upsert({
        where: { number: "123" },
        update: {},
        create: {
            number: '123',
            name: "bob",
            password: await bcrypt.hash('bob', 10),
            Balance: {
                create: {
                    amount: 10000,
                    locked: 0
                }
            },
            OnRampTransaction: {
                create: {
                    amount: 2000,
                    status: "Success",
                    startTime: new Date(),
                    token: "123",
                    provider: "Axis Bank",
                }
            }
        }
    })
    console.log({ alice, bob })
}

main()
    .then(async () => {
        await client.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await client.$disconnect()
        process.exit(1)
    })
