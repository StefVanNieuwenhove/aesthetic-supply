import prisma from '@/lib/prisma';
import { User } from '@prisma/client';

export const getUsers = async (): Promise<User[] | null> => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error(error);
    return null;
  }
};
