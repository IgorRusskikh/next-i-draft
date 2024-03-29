import bcrypt from 'bcrypt';
import { NextRequest } from 'next/server';

import prisma from '@/libs/prisma';

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    const isUserExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isUserExists) {
      return Response.json(
        {
          message: "Email is already taken",
        },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const salt = await bcrypt.genSalt(10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash: await bcrypt.hash(password, salt),
      },
    });

    return Response.json(
      {
        newUser,
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
