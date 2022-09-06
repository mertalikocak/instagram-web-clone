import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className=" mb-8 flex h-full w-full  flex-wrap items-center justify-center gap-8 overflow-hidden pb-8">
      <Outlet />
    </div>
  );
}
