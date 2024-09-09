import { ReactNode } from "react";

function BottomBar(
  {children}: {children?: ReactNode}
) {
  return (
    <div
      className="w-full h-auto p-2 flex justify-center gap-4"
      children={children}/>
  )
}

export default BottomBar;