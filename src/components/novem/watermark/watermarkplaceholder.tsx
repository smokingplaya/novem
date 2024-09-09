import { ReactNode } from "react";

// todo сделать тип Watermark
interface Props {
  children: ReactNode;
}

function WatermarkPlaceholder(props: Props) {
  return (
    <div className="flex justify-center">
      {props.children}
    </div>
  )
}

export default WatermarkPlaceholder;