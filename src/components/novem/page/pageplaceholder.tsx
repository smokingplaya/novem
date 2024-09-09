import { ReactNode } from "react";

function PagePlaceholder(
  {children}: {children?: ReactNode}
) {
  return (
    <main className="w-screen h-screen p-16 overflow-hidden">
      {children}
    </main>
  )
}

export default PagePlaceholder;