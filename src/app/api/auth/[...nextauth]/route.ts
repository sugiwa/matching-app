import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';
import { post } from '@/libs/api';

const option: NextAuthOptions = {
  debug: true,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      const userObj = user as any;
      const { provider, id_token } = account ?? {};
      const secret: string = process.env.NEXTAUTH_SECRET ?? '';

      try {
        const authInfo = await post(
          `/oauth/${provider}`,
          {},
          { ['oauth-token']: id_token },
        );
        const { accessToken } = authInfo;
        userObj.customToken = accessToken;
      } catch (e) {
        console.log(e);
      }
      return true;
    },
    session: async ({ session, token }) => {
      return Promise.resolve({
        ...session,
        accessToken: token,
      });
    },
    jwt: async ({ token, user }) => {
      if (user) {
        const userObj = user as any
        token.userId = userObj.id;
        token.customToken = userObj.customToken;
      }
      return token;
    },
  },
};

const handler = NextAuth(option);

export { handler as GET, handler as POST };
