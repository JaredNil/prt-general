import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { ApplicationContext } from '../../store/context.ts';

import Page from '../../components/page/Page';
import Pets from '../../components/pets/Pets';
import Content from './../../components/content/Content';

import { BsChevronBarRight } from 'react-icons/bs'
import { LuExternalLink } from 'react-icons/lu'


import './MainPage.scss'
import uuid from 'react-uuid';


function MainPage() {

  const mainRef = useRef(null)
  const contentRef = useRef(null)
  const sidebarRef = useRef(null)

  const [contentView, setContentView] = useState(null)
  const [sidebarView, setSidebarView] = useState(null)


  const appState = useContext(ApplicationContext)
  useEffect(() => {
    setContentView(contentRef.current.clientWidth + 45)
    setSidebarView(sidebarRef.current.clientWidth)
  }, [appState.viewportWidth])


  const minWidthSidebar = 320; const maxWidthSidebar= (() => (window.innerWidth/2))();
  
  let endWidthSidebar

  const mouseDownResizeHandler = (e) => {
    if (e.target.className === 'sidebar-resize') {
      const startWidthSidebar = sidebarRef.current.getBoundingClientRect().width;
      const startLeft = sidebarRef.current.getBoundingClientRect().x;

      mainRef.current.onmousemove = (eMove) => {
        const endLeft = eMove.clientX;
        endWidthSidebar = startWidthSidebar + startLeft - endLeft
        if  (maxWidthSidebar!=null){
          if (endWidthSidebar < minWidthSidebar) endWidthSidebar = minWidthSidebar
          if (endWidthSidebar > maxWidthSidebar) endWidthSidebar = maxWidthSidebar
      }

        sidebarRef.current.style.flexBasis = `${endWidthSidebar}px`
      }
      mainRef.current.onmouseup = () => {
        mainRef.current.onmousemove = null
      }
    }
  }



  const [isSideExpand, setIsSideExpand] = useState(true)
  const [contentHidden, setContentHidden] = useState(false)

  const clickExpandSidebar = (e) => {

    document.getElementById('expand-icon').classList.toggle('_active')

    setTimeout(() => {
      setContentHidden(!contentHidden)
    }, 100);


    if (isSideExpand) {
      setTimeout(() => {
        sidebarRef.current.style.flexBasis = `40px`
      }, 100);

      setTimeout(() => {
        setIsSideExpand(!isSideExpand)
      }, 102);

    }
    else if (!isSideExpand) {
      sidebarRef.current.style.flexBasis = '200px'
      setIsSideExpand(!isSideExpand)
    }

  }



  return (
    <Page>
      <div className="main" ref={mainRef}>

        <div className="content" ref={contentRef}>
          <Content />
        </div>

        <div
          ref={sidebarRef}
          onMouseDown={mouseDownResizeHandler}
          className={`sidebar ${(isSideExpand) ? '' : '_hidden'}`}
        >
          <div className="sidebar-resize" />
          <div className='sidebar-pets'>
            <div className="pets">

              <div className="pets__head">
                <Link to={'/projects'} className={`pets__head-title ${contentHidden ? '_hide' : ''}`}>
                  <span>{`Action projects: `}</span>
                  <LuExternalLink size={18} />
                </Link>
                <div id='expand-icon' className="pets__head-expand" onClick={clickExpandSidebar}>
                  <BsChevronBarRight size={30} className='' />
                </div>
              </div>
              <Pets contentHidden={contentHidden} />

            </div>

          </div>
          {
            <button className={`sidebar__button ${(isSideExpand) ? '_hidden' : ''}`} onClick={clickExpandSidebar}>
              <div className="sidebar__button-wrapper">
                <div className="sidebar__button-container">
                  {
                    Array(12).fill('').map(_ => (
                      <div className="text" key={uuid()}>
                        SIDEBAR OF PROJECT
                      </div>
                    ))
                  }
                </div>
              </div>
            </button>
          }
        </div>

      </div>
    </Page>
  );
}

export default MainPage
