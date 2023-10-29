import { useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

import Pets from "../pets/Pets";

import { BsChevronBarRight } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";

import "./sidebarMainPage.scss";

const Sidebar = ({
    isSideExpand,
    setIsSideExpand,
    sidebarRef,
    mouseDownResizeHandler,
}) => {
    const [contentHidden, setContentHidden] = useState(false);

    const clickExpandSidebar = () => {
        document.getElementById("expand-icon").classList.toggle("_active");

        setTimeout(() => {
            setContentHidden(!contentHidden);
        }, 100);

        if (isSideExpand) {
            setTimeout(() => {
                sidebarRef.current.style.flexBasis = `40px`;
            }, 100);

            setTimeout(() => {
                setIsSideExpand(!isSideExpand);
            }, 102);
        } else if (!isSideExpand) {
            sidebarRef.current.style.flexBasis = "200px";
            setIsSideExpand(!isSideExpand);
        }
    };

    return (
        <div
            ref={sidebarRef}
            onMouseDown={mouseDownResizeHandler}
            className={`sidebar ${isSideExpand ? "" : "_hidden"}`}
        >
            <div className="sidebar-resize" />
            <div className="sidebar-pets">
                <div className="pets">
                    <div className="pets__head">
                        <Link
                            to={"/projects"}
                            className={`pets__head-title ${contentHidden ? "_hide" : ""}`}
                        >
                            <span>{`Action projects: `}</span>
                            <LuExternalLink size={18} />
                        </Link>
                        <div
                            id="expand-icon"
                            className="pets__head-expand"
                            onClick={clickExpandSidebar}
                        >
                            <BsChevronBarRight size={30} className="" />
                        </div>
                    </div>
                    <Pets contentHidden={contentHidden} sidebarRef={sidebarRef} />
                </div>
            </div>

            {
                <button
                    className={`sidebar__button ${isSideExpand ? "_hidden" : ""}`}
                    onClick={clickExpandSidebar}
                >
                    <div className="sidebar__button-wrapper">
                        <div className="sidebar__button-container">
                            {Array(12)
                                .fill("")
                                .map((_) => (
                                    <div className="text" key={uuid()}>
                                        SIDEBAR OF PROJECT
                                    </div>
                                ))}
                        </div>
                    </div>
                </button>
            }
        </div>
    );
};
    
export default Sidebar;
