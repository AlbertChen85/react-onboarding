import { NextRequest, NextResponse } from 'next/server';
import { createTask, taskDB } from '@/app/lib/db';

export async function GET() {
  return NextResponse.json(taskDB.map(({ id, name, statusId }) => ({ id, name, statusId })));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.name || !body.statusId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const newTask = createTask({
    name: body.name,
    statusId: body.statusId,
    description: body.description,
    reactFlow: body.reactFlow ?? '{}',
  });
  return NextResponse.json(newTask, { status: 201 });
}
