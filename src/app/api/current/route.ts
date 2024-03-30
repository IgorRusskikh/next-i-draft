import prisma from '@/libs/prisma';

import { getServerAuthSession } from '../auth/[...nextauth]/route';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerAuthSession();

  if (!session) {
    return Response.json(
      {},
      {
        status: 404,
      }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: session?.user.id,
      },
    });

    if (!user) {
      return Response.json(
        {},
        {
          status: 404,
        }
      );
    }

    return Response.json({
      user,
    });
  } catch (error) {
    console.log(error);
    return Response.json({}, { status: 500 });
  }
}
