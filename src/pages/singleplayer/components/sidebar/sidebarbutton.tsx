import { ReactNode } from "react";
import Button, { ButtonType } from "../../../../components/novem/button";

interface Props {
  count: number,
  type?: ButtonType,
  children?: ReactNode;
}

function getCounterClass(type: ButtonType): string {
  switch (type) {
    case "primary":
      return "bg-neutral-800 text-white";
    case "secondary":
      return "bg-neutral-300 text-black";
  }
}

function SidebarButton(props: Props) {
  return (
    <Button className={"w-full h-auto flex justify-between items-center pl-3"}>
      {props.children}
      <p
        className={"ml-3 font-extrabold text-sm rounded-lg flex items-center justify-center aspect-square w-8 " + getCounterClass(props.type || "primary")}
        children={props.count} />
    </Button>
  );
}
export default SidebarButton;