import { getServerAuthSession } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/libs/prisma';

const serverAuth = async (req: Request) => {
  const session = await getServerAuthSession();

  if (!session) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
};

export default serverAuth;
