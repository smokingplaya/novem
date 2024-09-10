import { ReactNode } from "react";

function SidebarCategory(
  {title, children}: {title: string, children?: ReactNode}
) {
  return (
    <div className="w-full h-auto">
      <p
        className="text-l font-bold drop-shadow-lg text-neutral-400"
        children={title}/>

      {/* space-y-1 */}
      <div
        className="grid"
        children={children}/>
    </div>
  )
}

export default SidebarCategory;