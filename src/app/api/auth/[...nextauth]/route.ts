import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import { NextAuthOptions } from 'next-auth';

const option: NextAuthOptions = {
  debug: true,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
};

const handler = NextAuth(option);

export { handler as GET, handler as POST };
