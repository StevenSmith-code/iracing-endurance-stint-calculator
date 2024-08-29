"use server";

import { eq } from 'drizzle-orm/expressions';

import { users } from '@/drizzle/schema';
import { db } from '@/lib/db';
import {
  auth,
  currentUser,
} from '@clerk/nextjs/server';

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const [registered] = await db
      .insert(users)
      .values({
        fullname,
        clerkId,
        type,
        prefDriverColor: "#AA4A44",
        gmtOffset: 0,
        iRating: 1000,
        role: "user",
        updatedAt: new Date(),
      })
      .returning({
        fullname: users.fullname,
        id: users.id,
        type: users.type,
      });

    // If registration is successful, return the registered user data
    if (registered) {
      return { status: 200, user: registered };
    }
  } catch (error) {
    return { status: 400, Error: String(error) };
  }
};

// Function to handle user login
export const onLoginUser = async () => {
  const user = await currentUser();
  if (!user) {
    auth().redirectToSignIn();
  } else {
    try {
      // Find the user record by Clerk ID
      const [authenticated] = await db
        .select({
          fullname: users.fullname,
          id: users.id,
          type: users.type,
        })
        .from(users)
        .where(eq(users.clerkId, user.id));

      // If authentication is successful, return the authenticated user data
      if (authenticated) {
        return { status: 200, user: authenticated };
      }
    } catch (error) {
      // Handle any errors that occur during authentication
      return { status: 400, Error: String(error) };
    }
  }
};
