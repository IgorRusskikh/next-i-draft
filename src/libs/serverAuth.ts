import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const serverAuth = async (req: Request) => {
  const session = await getServerSession(authOptions);

  // if (!session?.user?.id) {
  //   throw new Error("Not signed in");
  // }

  console.log(session)

  // const currentUser = await prisma.user.findUnique({
  //   where: {
  //     id: session.user.id,
  //   },
  // });

  // if (!currentUser) {
  //   throw new Error("User not found");
  // }

  // return { currentUser };
};

export default serverAuth;
