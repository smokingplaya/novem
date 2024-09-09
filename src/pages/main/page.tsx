import { Gamepad2, Languages, SquareTerminal } from "lucide-react";
import BottomBar from "../../components/novem/bottombar/bottombar";
import PageContent from "../../components/novem/page/pagecontent";
import Sidebar from "../../components/novem/sidebar/sidebar";
import SidebarButton from "../../components/novem/sidebar/sidebarbutton";
import SidebarCategory from "../../components/novem/sidebar/sidebarcategory";
import BottomBarButon from "../../components/novem/bottombar/bottombarbutton";
import Watermark from "../../components/novem/watermark/watermark";
import WatermarkPlaceholder from "../../components/novem/watermark/watermarkplaceholder";
import SidebarImage from "../../components/novem/sidebar/sidebarimage";
import { Pages } from "../../App";
import PagePlaceholder from "../../components/novem/page/pageplaceholder";

// todo @ заменить все строки на language хуйню
function Page(
  {page}: {page: React.Dispatch<React.SetStateAction<Pages>>}
) {
  return (
    <PagePlaceholder>
      <PageContent>
        <div className="w-auto h-full p-8 inline-flex flex-col flex-col overflow-hidden">
          <Sidebar className="flex-grow">
            {/**todo src заменить в игре*/}
            <SidebarImage src="https://github.com/Facepunch/garrysmod/blob/master/garrysmod/gamemodes/sandbox/logo.png?raw=true"/>

            <SidebarCategory title="Play">
              <SidebarButton text="Create single game" onClick={() => page(Pages.Singleplayer)} />
              <SidebarButton text="Join multiplayer" onClick={() => page(Pages.Multiplayer)} />
            </SidebarCategory>

            <SidebarCategory title="Options">
              <SidebarButton text="Settings" onClick={() => page(Pages.Settings)} />
              <SidebarButton text="Modifications" onClick={() => page(Pages.Addons)} />
            </SidebarCategory>

            <SidebarCategory title="Leave">
              <SidebarButton text="Disconnect from current server" />
              <SidebarButton text="Quit game" />
            </SidebarCategory>
          </Sidebar>

          {/* Низ */}
          <div className="mt-auto space-y-2">
            <WatermarkPlaceholder>
              <Watermark />
            </WatermarkPlaceholder>

            <BottomBar>
              <BottomBarButon tooltip="Язык игры" children={<Languages color="white" />} />
              <BottomBarButon tooltip="Режим игры" children={<Gamepad2 color="white" />} />
              <BottomBarButon tooltip="Открыть консоль" children={<SquareTerminal color="white" />} />
            </BottomBar>
          </div>
        </div>
      </PageContent>
    </PagePlaceholder>
  );
}

export default Page;