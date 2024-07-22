import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Dashboard from "./ui/dashboard.tsx";
import Login from "./components/login.tsx";
import { App } from "./app.tsx";
import { Room, loader as roomLoader } from "./ui/room.tsx";
import { TaskPage, loader as taskLoader } from "./ui/task.tsx";
const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "room/:roomId",
        element: <Room />,
        loader: roomLoader,
        children: [
          {
            path: "task/:taskId",
            element: <TaskPage />,
            loader: taskLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
