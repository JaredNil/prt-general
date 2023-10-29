import { Link } from "react-router-dom"
import uuid from "react-uuid"

import { projStorage } from "../../utils/projStorage.ts"

import './projects.scss'

const Projects = () => {


    return (
        <section className="projects">
            <h1 className="projects__title">
                <span>Проекты портфолио</span>
            </h1>
            <div className="projects__content">
                
                {
                    projStorage.map(category => (
                        <div className='projects__chapter' key={uuid()}>
                            <div className="projects__chapter-category">
                                <div className="projects__chapter-circle" />
                                <span>{category.category}</span>
                            </div>
                            {
                                category.items.map(item => (

                                    <div className="pr" key={uuid()}>

                                        <div className="pr__title">{item.name}</div>
                                        <div className="pr__skills">
                                            <div className="pr__skills-title"></div>
                                            <div className="pr__skills-map">
                                                {item.skills.map((t, j, skills) => (

                                                    <span key={uuid()}>
                                                        {` ${t}`}
                                                        {`${(skills.length === j + 1) ? '' : ', '}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="pr__links">
                                            {
                                                Object.entries(item.links).map((link, j, arr) => (
                                                    <Link to={link[1]} key={uuid()}>
                                                        {`${link[0]}`}
                                                        {`${(arr.length === j + 1) ? '' : ', '}`}
                                                    </Link>
                                                ))


                                            }
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects