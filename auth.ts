import NextAuth from 'next-auth';
import authConfig from './src/auth.config';

export const { auth, handlers, signOut, signIn } = NextAuth(authConfig);