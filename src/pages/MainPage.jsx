import { useEffect, useRef, useState } from 'react';

import Page from '../components/page/Page';

import { Link } from 'react-router-dom';

import Pets from './../components/pets/Pets';

import './MainPage.scss'


function MainPage() {

  const contentRef = useRef(null)
  const sidebarRef = useRef(null)

  useEffect(()=>{
    console.log(contentRef.current)
  },[])

  const clickResizeHandler = (e)=>{
    console.log(contentRef.current?.offsetWidth)
    if(e.target.className==='sidebar-resize'){


    }
  }

  return (
    <Page>
      <div className="main">

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

        <div className="sidebar" 
          ref={sidebarRef}
          onClick={clickResizeHandler}
        >
          <div className="sidebar-resize"/>
          <Link
            to='/'
            className='sidebar-link'
          >
            <Pets/>
          </Link>
        </div>

      </div>
    </Page>
  );
}

export default MainPage
