import { useContext, useEffect, useRef, useState } from "react";

import { ApplicationContext } from "../../store/context.ts";

import Page from "../../components/page/Page";

import ContentMainPage from "../../components/contentMainPage/ContentMainPage.jsx";
import SidebarMainPage from "../../components/sidebarMainPage/SidebarMainPage.jsx";

function MainPage() {
  // Управление resize sidebar
  const mainRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  // Closed sidebar of mainpage
  const [isSideExpand, setIsSideExpand] = useState(true);
  const [, setContentView] = useState(null);
  const [, setSidebarView] = useState(null);

  // Стейт приложения с слушателями событий resize viewport
  const appState = useContext(ApplicationContext);

  // Render ширины компонентов при грзнтнм ресайзе
  useEffect(() => {
    setContentView(contentRef.current.clientWidth + 45);
    setSidebarView(sidebarRef.current.clientWidth);
  }, [appState.viewportWidth]);

  // Управлямые констакнты
  const minWidthSidebar = 320;
  const maxWidthSidebar = (() => window.innerWidth / 2)();
  let endWidthSidebar;

  // Resize sidebar
  const mouseDownResizeHandler = (e) => {
    if (e.target.className === "sidebar-resize") {
      const startWidthSidebar =
        sidebarRef.current.getBoundingClientRect().width;
      const startLeft = sidebarRef.current.getBoundingClientRect().x;

      mainRef.current.onmousemove = (eMove) => {
        const endLeft = eMove.clientX;
        endWidthSidebar = startWidthSidebar + startLeft - endLeft;
        if (maxWidthSidebar != null) {
          if (endWidthSidebar < minWidthSidebar)
            endWidthSidebar = minWidthSidebar;
          if (endWidthSidebar > maxWidthSidebar)
            endWidthSidebar = maxWidthSidebar;
        }

        sidebarRef.current.style.flexBasis = `${endWidthSidebar}px`;
      };
      mainRef.current.onmouseup = () => {
        mainRef.current.onmousemove = null;
      };
    }
  };

  return (
    <Page>
      <div className="mainpage" ref={mainRef}>

        <ContentMainPage contentRef={contentRef} />
        <SidebarMainPage
          sidebarRef={sidebarRef}    
          isSideExpand={isSideExpand} setIsSideExpand={setIsSideExpand}
          mouseDownResizeHandler={mouseDownResizeHandler}
        />
        
      </div>
    </Page>
  );
}

export default MainPage;
