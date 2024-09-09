import { ReactNode, useState } from "react";
import PageMain from "./pages/main/page";
import PageSingplayer from "./pages/singleplayer/page";
import PageMultiplayer from "./pages/multiplayer/page";
import PageSettings from "./pages/settings/page";
import PageAddons from "./pages/addons/page";

export enum Pages {
  Main,
  Singleplayer,
  Multiplayer,
  Settings,
  Addons
}

function App() {
  const [page, setPage] = useState<Pages>(Pages.Main);

  function renderPage(): ReactNode {
    switch (page) {
      case Pages.Main:
        return <PageMain page={setPage} />;
      case Pages.Singleplayer:
        return <PageSingplayer page={setPage} />;
      case Pages.Multiplayer:
        return <PageMultiplayer page={setPage} />;
      case Pages.Settings:
        return <PageSettings page={setPage} />;
      case Pages.Addons:
        return <PageAddons page={setPage} />;
    }
  }

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;