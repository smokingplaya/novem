import { Pages } from "../../App";

interface Props {
  page: React.Dispatch<React.SetStateAction<Pages>>
}

function Page(props: Props) {
  return (
    <>What's up: addons</>
  )
}

export default Page;