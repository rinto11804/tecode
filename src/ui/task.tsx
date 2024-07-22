import { useLoaderData } from "react-router-dom";
import { fetchTaskDetails } from "../api/dashboard";
import { useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

export async function loader({ params }) {
  return { taskId: params.taskId };
}

export function TaskPage() {
  const { taskId } = useLoaderData();
  const { mutate, data, isPending, error, isError } = useMutation({
    mutationFn: (taskId: string) => fetchTaskDetails(taskId),
  });
  console.log(taskId);
  useEffect(() => {
    mutate(taskId);
  }, [taskId]);
  return (
    <>
      {isPending ? (
        "Loading...."
      ) : data ? (
        <div>
          <h1>
            {data.task.title} @{data.task.handler}
          </h1>
          <p>{data.task.description}</p>
          <p>{data.task.body}</p>
        </div>
      ) : (
        "No Task Found"
      )}
    </>
  );
}
