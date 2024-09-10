import { ReactNode } from "react";

function Sidebar(
  { children }: { children?: ReactNode; }
) {
  return (
    <div
      className="rounded-l-lg w-auto h-full bg-neutral-800 p-3 inline-flex flex-col overflow-hidden flex-grow"
      children={children}
    />
  );
}
export default Sidebar;