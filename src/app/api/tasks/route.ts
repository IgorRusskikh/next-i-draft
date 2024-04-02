import serverAuth from '@/libs/serverAuth';

export async function GET(req: Request) {
  try {
    const { currentUser } = await serverAuth(req);

    const tasks = await prisma?.task.findMany({
      where: {
        user: {
          id: currentUser.id,
        },
      },
      include: {
        taskState: true,
      },
    });

    return Response.json(
      {
        tasks,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json({}, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { currentUser } = await serverAuth(req);

    const { title, content, monthGoal, state, deadline } = await req.json();

    const newTask = await prisma?.task.create({
      data: {
        title,
        content,
        monthGoal,
        deadline: new Date().toISOString(),
        user: {
          connect: {
            id: currentUser.id,
          },
        },
        taskState: {
          create: {
            state: state,
          },
        },
      },
    });

    console.log(newTask);

    return Response.json(
      {
        newTask,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json({}, { status: 500 });
  }
}
