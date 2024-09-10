import { Pages } from "../../App";
import PageContent from "../../components/novem/page/pagecontent";
import PagePlaceholder from "../../components/novem/page/pageplaceholder";
import Sidebar from "./components/sidebar/sidebar";
import SidebarButton from "./components/sidebar/sidebarbutton";

interface Props {
  page: React.Dispatch<React.SetStateAction<Pages>>
}

function Page(props: Props) {
  return (
    <PagePlaceholder>
      <PageContent>
        <div className="w-full h-full bg-neutral-900 rounded-xl"> {/* border-[3px] border-purple-800 border-dashed */}
          <Sidebar>
            {/* сделать полосу при переполнении */}
            <SidebarButton count={10}>Sandbox</SidebarButton>
            <SidebarButton count={23}>Counter-Strike Source</SidebarButton>
            <SidebarButton count={2}>MilitaryRP</SidebarButton>
            <div className="">
              <h1>himars</h1>
            </div>
          </Sidebar>
        </div>
      </PageContent>
    </PagePlaceholder>
  )
}

export default Page;