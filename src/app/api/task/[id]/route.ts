import { NextRequest, NextResponse } from 'next/server';
import { deleteTask, findTaskById, updateTask } from '@/app/lib/db';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const task = findTaskById(params.id);
  if (!task) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }
  return NextResponse.json(task);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  if (!params) {
    return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
  }

  const body = await req.json();
  if (!body.name || !body.statusId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const updatedTask = updateTask(params.id, {
    name: body.name,
    statusId: body.statusId,
    description: body.description,
    reactFlow: body.reactFlow ?? '{}',
  });

  if (!updatedTask) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  return NextResponse.json(updatedTask);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  if (!params) {
    return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
  }

  const isDeleted = deleteTask(params.id);

  if (!isDeleted) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Task deleted successfully' });
}
