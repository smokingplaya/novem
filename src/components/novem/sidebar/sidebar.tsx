import { ReactNode } from "react";

interface Props {
  className?: string,
  children?: ReactNode
}

function Sidebar(props: Props) {
  return (
    <div
      className={"h-auto space-y-6 " + (props.className ? props.className : "")}
      children={props.children}/>
  )
}

export default Sidebar;