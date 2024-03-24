import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import prisma from '@/libs/prisma';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        console.log(credentials);

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const valid = await bcrypt.compare(credentials.password, user.password);

        console.log(valid);

        if (!valid) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
