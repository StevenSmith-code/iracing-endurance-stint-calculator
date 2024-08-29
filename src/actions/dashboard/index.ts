"use server";

import { eq } from 'drizzle-orm';

import { users } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';

export const getUserData = async () => {
  try {
    const user = await currentUser();
    if (user) {
      const userDetails = await db
        .select()
        .from(users)
        .where(eq(users.clerkId, user.id))
        .limit(1);
      if (userDetails) {
        return userDetails;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
