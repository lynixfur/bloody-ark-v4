import NextAuth from 'next-auth/next'
import { authOptions } from '@/libs/auth';
import type { NextApiRequest, NextApiResponse } from "next"
import { NextRequest } from 'next/server';

async function handler(
    req: NextRequest,
    res: NextRequest
) {
    // @ts-expect-error
    return await NextAuth(req, res, authOptions(req))
}

export { handler as GET, handler as POST }