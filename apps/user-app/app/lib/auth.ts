import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt"
import { client } from "@repo/database/client"

export const Auth_Options = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "1231231231" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any, req) {
                const hashedPassword = await bcrypt.hash(credentials?.password, 10)
                const existingUser = await client.user.findFirst({
                    where: {
                        number: credentials.phone,
                    }
                })
                if (existingUser) {
                    console.log(existingUser)
                    const isValidPassword = await bcrypt.compare(credentials.password, existingUser.password)
                    if (isValidPassword) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        }
                    }
                    return null
                }

                try {
                    const user = await client.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword,
                        }
                    });
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({ token, user }: any) => {
            console.log("Token:", token)
            token.id = "this is Id"
            return token
        },
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
                session.user.id = token.id
            }
            return session
        }
    }
}