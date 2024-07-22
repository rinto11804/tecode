import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Outlet />
      </div>
    </>
  );
}
