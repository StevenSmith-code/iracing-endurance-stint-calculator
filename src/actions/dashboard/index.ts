"use server";

import { eq } from 'drizzle-orm';

import {
  car,
  track,
  users,
} from '@/drizzle/schema';
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
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCarsAndTracks = async () => {
  try {
    const cars = await db.select().from(car);
    const tracks = await db.select().from(track);
    if (cars && tracks) {
      return [cars, tracks];
    }
  } catch (error) {
    console.error(error);
  }
};
