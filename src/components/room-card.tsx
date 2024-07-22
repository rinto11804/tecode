import { HTMLAttributes } from "react";

type RoomCardProps = {
  title: string;
  description: string;
};

export default function RoomCard({
  title,
  description,
  onClick,
}: RoomCardProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        className="card bg-base-200 w-96 shadow-lg gap-3 cursor-pointer hover:shadow-xl ease-in-out"
        onClick={onClick}
      >
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-neutral">new</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end mt-3">
            <div className="badge badge-primary">Code</div>
            <div className="badge badge-accent">Learn</div>
          </div>
        </div>
      </div>
    </>
  );
}
