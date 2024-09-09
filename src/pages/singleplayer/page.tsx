import { Pages } from "../../App";
import PageContent from "../../components/novem/page/pagecontent";
import PagePlaceholder from "../../components/novem/page/pageplaceholder";

interface Props {
  page: React.Dispatch<React.SetStateAction<Pages>>
}

function Page(props: Props) {
  return (
    <PagePlaceholder>
      <PageContent>
        <div className="w-full h-full bg-neutral-900 border-[3px] border-purple-800 border-dashed rounded-xl">
          <div className="w-auto h-full bg-neutral-800 p-8 inline-flex flex-col flex-col overflow-hidden">
            <button>hello guys britto</button>
          </div>

          <div>

          </div>
        </div>
      </PageContent>
    </PagePlaceholder>
  )
}

export default Page;