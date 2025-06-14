import { NextResponse } from 'next/server';

const taskStatuses = [
  { id: 1, name: 'pending' },
  { id: 2, name: 'start' },
  { id: 3, name: 'in review' },
  { id: 4, name: 'done' },
];

export async function GET() {
  return NextResponse.json(taskStatuses);
}
