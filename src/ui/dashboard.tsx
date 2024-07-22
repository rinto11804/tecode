import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRooms } from "../api/dashboard";
import { IRoom } from "../api/types";
import CreateRoomModal from "../components/createroom-modal";
import RoomCard from "../components/room-card";
import { useRoomStore } from "../store/room";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const setRoom = useRoomStore((state) => state.setRoom);

  const { isPending, error, data } = useQuery<{ rooms: IRoom[] }>({
    queryKey: ["fetchRooms"],
    queryFn: fetchRooms,
  });

  const rooms = useMemo(() => {
    if (data) return data.rooms;
  }, [data]);

  const handleRoomOpen = (roomId: string) => {
    const room = rooms?.find((room) => roomId === room.id)!;
    setRoom(room);
    navigate(`/room/${roomId}`);
  };

  if (error) return "Error Occured";
  return (
    <>
      <div className="flex h-screen gap-2 flex-col w-full">
        <nav className="flex w-full  justify-between items-center p-2">
          <p>dashboard</p>
          <button
            className="btn btn-primary rounded-md"
            onClick={() => setIsVisible(true)}
          >
            Create Room
          </button>
        </nav>
        <CreateRoomModal
          visible={isVisible}
          onClose={() => setIsVisible(false)}
        />
        <div className="h-full flex items-center justify-center">
          {isPending ? (
            "Loading....."
          ) : (
            <div className="grid grid-cols-3 gap-5">
              {rooms?.map((room: IRoom) => (
                <RoomCard
                  {...room}
                  key={room.id}
                  onClick={() => handleRoomOpen(room.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
