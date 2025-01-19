import { auth, currentUser } from '@clerk/nextjs/server';

export const getUser = async () => {
  const user = await currentUser();
  return user;
};

export const isAuthenticated = async () => {
  const { sessionId } = await auth();
  console.log(!!sessionId);
  return !!sessionId;
};
