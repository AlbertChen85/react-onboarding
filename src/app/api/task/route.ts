import { NextRequest, NextResponse } from 'next/server';
import { createTask, taskDB } from '@/app/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const size = parseInt(searchParams.get('size') || '10', 10);
  const name = searchParams.get('name')?.toLowerCase();

  let filteredTasks = taskDB;

  // Filter by name if provided
  if (name) {
    filteredTasks = filteredTasks.filter((task) =>
      task.name.toLowerCase().includes(name)
    );
  }

  // Pagination logic
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedTasks,
    total: filteredTasks.length,
    page,
    size,
  });
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
