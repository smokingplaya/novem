import { ReactNode } from "react";

function SidebarButtonPlaceholder(
  {children}: {children?: ReactNode}
) {
  return (
    <div className="space-y-1.5">
      {children}
    </div>
  )
}

export default SidebarButtonPlaceholder;