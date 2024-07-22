export type LoginInput = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  name: string;
  role: string;
};
export interface IRoom {
  id: string;
  title: string;
  description: string;
}

export type CreateRoomReq = {
  title: string;
  description: string;
};

export interface ITask {
  id: string;
  title: string;
  description: string;
  handler: string;
  body: string;
}
