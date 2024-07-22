import { BASE_URL } from "./auth";
import axios from "axios";
import { CreateRoomReq } from "./types";

export const dashboardApi = axios.create({
  baseURL: BASE_URL,
});

const access_token = localStorage.getItem("token");

dashboardApi.defaults.headers.common = {
  Authorization: `Bearer ${access_token}`,
  "Content-Type": "application/json",
};

export const fetchRooms = async () => {
  const res = dashboardApi.get("/decode/room");
  return (await res).data;
};

export const createRoom = async (room: CreateRoomReq) => {
  const res = dashboardApi.post("/decode/room", room);
  return (await res).data;
};

export const fetchTasksByRoomId = async (roomId: string) => {
  const res = dashboardApi.get(`/decode/task/room/${roomId}`);
  return (await res).data;
};

export const fetchTaskDetails = async (taskId: string) => {
  const res = dashboardApi.get(`/decode/task/${taskId}`);
  return (await res).data;
};
