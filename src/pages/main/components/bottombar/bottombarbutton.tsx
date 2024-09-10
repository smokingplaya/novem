import { ReactNode } from "react";

interface Props {
  tooltip: string,
  children: ReactNode;
}

function BottomBarButon(props: Props) {
  return (
    <button
      className="bg-stone-800 p-2 rounded-lg transition duration-200 ease-in-out transform hover:bg-stone-700 hover:scale-125"
      children={props.children}
    />
  );
}

export default BottomBarButon;