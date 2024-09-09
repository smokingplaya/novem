import { ReactNode } from "react";

interface Props {
  href: string,
  children?: ReactNode;
}

function Link(props: Props) {
  return (
    <a className="font-bold text-purple-700 cursor-pointer transition duration-300 ease-in-out transform hover:text-purple-400" href={props.href}>
      {props.children}
    </a>
  )
}

export default Link;