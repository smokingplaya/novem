import { ReactNode } from "react";

type ButtonTypes = "primary" | "secondary";

interface Props {
  count: number,
  type?: ButtonTypes,
  children?: ReactNode;
}

function getButtonClass(type: ButtonTypes): string {
  switch (type) {
    case "primary":
      return "bg-neutral-900 text-white transition duration-300 ease-in-out transform hover:text-purple-600 hover:bg-neutral-950 hover:scale-105";
    case "secondary":
      return "bg-neutral-200 text-black transition duration-300 ease-in-out transform hover:text-purple-600 hover:bg-neutral-100 hover:scale-105";
  }
}

function getCounterClass(type: ButtonTypes): string {
  switch (type) {
    case "primary":
      return "bg-neutral-800 text-white";
    case "secondary":
      return "bg-neutral-300 text-black";
  }
}

function SidebarButton(props: Props) {
  return (
    <button className={"w-full h-auto flex justify-between items-center rounded-lg p-1 pl-3 pr-1 text-lg font-medium " + (getButtonClass(props.type || "primary"))}>
      {props.children}
      <p
        className={"ml-3 font-extrabold text-sm rounded-lg flex items-center justify-center aspect-square w-8 " + getCounterClass(props.type || "primary")}
        children={props.count} />
    </button>
  );
}
export default SidebarButton;