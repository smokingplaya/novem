import { ReactNode } from "react";

function PageContent(
  {children}: {children?: ReactNode}
) {
  return (
    <div className="w-full h-full"> {/* border-dashed rounded-lg border-red-600 border-2 */}
      {children}
    </div>
  )
}

export default PageContent;