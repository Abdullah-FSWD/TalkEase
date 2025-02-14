import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2sL3vhwFi6QOlvJwJvxySmhdPDR"];

export async function getIsAdmin() {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
}
