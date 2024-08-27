"use server";

import { eq } from 'drizzle-orm/expressions';

import { users } from '@/drizzle/schema';
import { db } from '@/lib/db';
import {
  auth,
  currentUser,
} from '@clerk/nextjs/server';

// Function to handle user registration
export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    // Insert a new user record into the database
    const [registered] = await db
      .insert(users)
      .values({
        driverName: fullname,
        clerkId,
        type,
        prefDriverColor: "defaultColor", // Optional or use your default logic
        gmtOffset: 0, // Optional or use your default logic
        iRating: 1000, // Optional or use your default logic
        role: "user", // Example role
        updatedAt: new Date(), // Only if not defaulting in schema
      })
      .returning({
        driverName: users.driverName,
        id: users.id,
        type: users.type,
      });

    // If registration is successful, return the registered user data
    if (registered) {
      return { status: 200, user: registered };
    }
  } catch (error) {
    // Handle any errors that occur during registration
    return { status: 400 };
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
          driverName: users.driverName,
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
      return { status: 400 };
    }
  }
};
