import { ArrowLeft } from "lucide-react";
import { Pages } from "../../App";
import PageContent from "../../components/novem/page/pagecontent";
import PagePlaceholder from "../../components/novem/page/pageplaceholder";
import Sidebar from "./components/sidebar/sidebar";
import SidebarButton from "./components/sidebar/sidebarbutton";
import SidebarButtonPlaceholder from "./components/sidebar/sidebarbuttonplaceholder";
import Button from "../../components/novem/button";

interface Props {
  page: React.Dispatch<React.SetStateAction<Pages>>
}

function Page(props: Props) {
  return (
    <PagePlaceholder>
      <PageContent>
        <div className="w-full h-full bg-neutral-900 rounded-xl"> {/* border-[3px] border-purple-800 border-dashed */}
          <Sidebar>
            {/* todo сделать полосу при переполнении */}
            <SidebarButtonPlaceholder>
              <SidebarButton count={10}>Sandbox</SidebarButton>
              <SidebarButton count={23}>Counter-Strike Source</SidebarButton>
              <SidebarButton count={2}>MilitaryRP</SidebarButton>
            </SidebarButtonPlaceholder>

            <div className="mt-auto">
              <Button
                onClick={() => props.page(Pages.Main)}
                className="w-full h-auto flex p-2 gap-2 items-center"><ArrowLeft/> Back</Button>
            </div>
          </Sidebar>
        </div>
      </PageContent>
    </PagePlaceholder>
  )
}

export default Page;