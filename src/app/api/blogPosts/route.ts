import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const blogPosts = await prisma.blogPost.findMany();
    return NextResponse.json(blogPosts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching blog posts' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { image, title, date } = await req.json();
  try {
    const blogPost = await prisma.blogPost.create({
      data: { image, title, date },
    });
    return NextResponse.json(blogPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating blog post' }, { status: 500 });
  }
}
