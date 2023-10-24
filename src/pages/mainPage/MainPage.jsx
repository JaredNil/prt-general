import { useEffect, useRef, useState } from 'react';

import Page from '../../components/page/Page';

import { Link } from 'react-router-dom';

import Pets from '../../components/pets/Pets';

import { BsChevronBarRight } from 'react-icons/bs'
import {LuExternalLink} from 'react-icons/lu'


import './MainPage.scss'


function MainPage() {

  const mainRef = useRef(null)
  const contentRef = useRef(null)
  const sidebarRef = useRef(null)
  

  const minWidthSidebar = 200, maxWidthSidebar = 600;
  let endWidthSidebar

  const mouseDownResizeHandler = (e)=>{
    if(e.target.className==='sidebar-resize'){
        const startWidthSidebar = sidebarRef.current.getBoundingClientRect().width;
        const startLeft = sidebarRef.current.getBoundingClientRect().x;
        
        mainRef.current.onmousemove = (eMove) => {
          const endLeft = eMove.clientX;
          endWidthSidebar = startWidthSidebar + startLeft - endLeft

          if(endWidthSidebar < minWidthSidebar) endWidthSidebar = minWidthSidebar
          if(endWidthSidebar > maxWidthSidebar) endWidthSidebar = maxWidthSidebar

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
      e.target.classList.toggle('_active')

      setTimeout(() => {
        setContentHidden(!contentHidden)
      }, 300);


      if (isSideExpand)  {
        setTimeout(() => {
          sidebarRef.current.style.flexBasis = `40px`
        }, 100);
        
        setTimeout(() => {
          setIsSideExpand(!isSideExpand)
        }, 110);

      }
      else if (!isSideExpand)  {
            sidebarRef.current.style.flexBasis = '200px'
            setIsSideExpand(!isSideExpand)
      }
      
  }

  return (
    <Page>
      <div className="main" ref={mainRef}>

        <div className="content" 
          ref={contentRef}
        >
          <div className="content__container">

            <div className="content__box">
              <div className="box">
                <div>Андрей Боженков</div>

                <div>reactJS dev</div>

                <div>Stack</div>

                <div>Меня зовут Андрей Боженков</div>

                <div>Я front-end TS/JS разработчик</div>

                <div>I love creating and expressing new ideas, through web, app design, typography, and more.</div>

                <div>I have an experience in interactive design, illustration, and more.</div>

                <div>I love to cook, going to the beach, animals, and fries. I’m looking for my next big challenge in UX/UI and branding</div>

                <div>Check out some of my projects.</div>
              </div>

            </div>

          </div>
        </div>

        <div className={`sidebar ${(isSideExpand) ? '' : '_hidden'}`} 
          ref={sidebarRef}
          onMouseDown={mouseDownResizeHandler}
        >
          <div className="sidebar-resize"/>
          <div className='sidebar-pets'>
            <div className="pets">

              <div className="pets__head">
                  <Link to={'/projects'} className={`pets__head-title ${contentHidden ? '_hide' : '' }`}>
                      <span>{`Action projects: `}</span>
                      <LuExternalLink size={18} />
                  </Link>
                  <div className="pets__head-expand" onClick={clickExpandSidebar}>
                      <BsChevronBarRight size={30} className='' />
                  </div>
              </div>
                <Pets contentHidden={contentHidden} />
            </div>

          </div>
          {
            !isSideExpand && 
              <div>
                
              </div>
          }
        </div>

      </div>
    </Page>
  );
}

export default MainPage
