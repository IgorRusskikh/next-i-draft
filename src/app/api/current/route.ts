import serverAuth from '@/libs/serverAuth';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { currentUser } = await serverAuth(req);

    return Response.json({
      currentUser,
    });
  } catch (error) {
    console.log(error);
    return Response.json({}, { status: 500 });
  }
}
