import { ReactNode } from "react";
import Button from "../../../../components/novem/button";

interface Props {
  tooltip: string,
  children: ReactNode;
}

function BottomBarButon(props: Props) {
  return (
    <Button
      className="p-2 hover:scale-125"
      children={props.children}
    />
  );
}

export default BottomBarButon;