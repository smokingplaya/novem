import { ReactNode } from "react";

export type ButtonType = "primary" | "secondary";

interface Props {
  className?: string,
  type?: ButtonType,
  onClick?: React.MouseEventHandler<HTMLElement>,
  children?: ReactNode;
}

function getButtonClass(type: ButtonType): string {
  switch (type) {
    case "primary":
      return "bg-neutral-900 text-white transition duration-300 ease-in-out transform hover:text-purple-600 hover:bg-neutral-950 hover:scale-105";
    case "secondary":
      return "bg-neutral-200 text-black transition duration-300 ease-in-out transform hover:text-purple-600 hover:bg-neutral-100 hover:scale-105";
  }
}

function Button(props: Props) {
  return (
    <button
      className={"p-1 text-lg font-medium rounded-lg " + (props.className ? props.className + " " : "") + (getButtonClass(props.type || "primary"))}
      children={props.children}
      onClick={props.onClick}
    />
  );
}
export default Button;