import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IRoom } from "../api/types";

interface State {
  room: IRoom;
  setRoom: (room: IRoom) => void;
}

export const useRoomStore = create(
  persist<State>(
    (set, get) => ({
      room: { id: "", title: "", description: "" },
      setRoom: (room: IRoom) => set({ room: (get().room = room) }),
    }),
    {
      name: "room-storage", // name of the item in the storage (must be unique)
    },
  ),
);
