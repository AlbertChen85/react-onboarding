export type Status = {
  id: number;
  name: string;
}

export type TaskRow = {
  name: string;
  statusId: number;
  description: string;
  id: string;
};

export type TaskResponse = {
  data: TaskRow[];
  page: number;
  size: number;
  total: number;
};