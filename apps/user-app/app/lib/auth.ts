import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { client } from "@repo/database/client";

export const Auth_Options = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "1231231231" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any, req) {
                let existingUser;
                try {
                    existingUser = await client.user.findFirst({
                        where: {
                            number: credentials.phone,
                        }
                    });

                    if (existingUser) {
                        const isValidPassword = await bcrypt.compare(credentials.password, existingUser.password);
                        if (isValidPassword) {
                            return {
                                id: existingUser.id.toString(),
                                name: existingUser.name,
                                email: existingUser.number
                            };
                        }
                        return null;
                    }

                    const hashedPassword = await bcrypt.hash(credentials.password, 10);
                    const newUser = await client.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword,
                        }
                    });
                    return {
                        id: newUser.id.toString(),
                        name: newUser.name,
                        email: newUser.number
                    };
                } catch (error) {
                    console.error("Error during authorization:", error);
                    return null;
                } finally {
                    await client.$disconnect();
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
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        session: ({ session, token }: any) => {
            if (session.user) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
            }
            return session;
        }
    }
};
