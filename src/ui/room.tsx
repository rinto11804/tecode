import { Outlet, useLoaderData } from "react-router-dom";
import { useRoomStore } from "../store/room";
import { useMutation } from "@tanstack/react-query";
import { fetchTasksByRoomId } from "../api/dashboard";
import { useEffect } from "react";

import Tasks from "../components/task";

export async function loader({ params }) {
  return { roomId: params.roomId };
}

export function Room() {
  const { roomId } = useLoaderData();
  const room = useRoomStore((state) => state.room);
  const { mutate, data, isPending, error, isError } = useMutation({
    mutationFn: (roomId: string) => fetchTasksByRoomId(roomId),
  });

  useEffect(() => {
    mutate(roomId);
  }, [roomId]);

  return (
    <>
      <div className="w-full h-full">
        <h1 className="text-xl p-4">
          {room.title} @{room.id}
          <p>{room.description}</p>
        </h1>
        <div className="grid grid-cols-2">
          <div>
            {isPending ? (
              "Loading....."
            ) : data ? (
              <Tasks tasks={data.tasks} roomId={room.id} />
            ) : (
              ""
            )}
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
