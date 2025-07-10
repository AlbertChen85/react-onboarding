export type Status = {
  id: number;
  name: string;
}

export type TaskRow = {
  name: string;
  statusId: number;
  description: string;
};

export type TaskResponse = {
  data: TaskRow[];
  page: number;
  size: number;
  total: number;
};