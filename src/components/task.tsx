import { ITask } from "../api/types";
import { useNavigate } from "react-router-dom";

type TaskProps = {
  tasks: Partial<ITask[]>;
  roomId: string;
};

export default function Tasks({ tasks, roomId }: TaskProps) {
  const navigate = useNavigate();
  const handleSelectTask = (e, taskId: string) => {
    e.preventDefault();
    navigate(`/room/${roomId}/task/${taskId}`);
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Handler</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr
                key={task?.id}
                className="hover cursor-pointer align-baseline"
                onClick={(e) => handleSelectTask(e, task?.id)}
              >
                <th>{i + 1}</th>
                <td>{task?.title}</td>
                <td className="badge badge-primary">@{task?.handler}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
