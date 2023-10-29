import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

import { ApplicationContext } from '../../store/context.ts'

import {PiArrowLineDownRightBold} from 'react-icons/pi'

import './pets.scss'

import {projStorage} from '../../utils/projStorage.ts'



const Pets = ({contentHidden}) => {

    const appState = useContext(ApplicationContext);


    return (
        <div
            className={`pets__content ${contentHidden ? '_hide' : '' }`} 
        >
            {
                projStorage.map( category => (
                    <div className='pets__chapter' key={uuid()}>
                        <div className="category">
                            <div className="category-circle"/>
                            <span>{category.category}</span>
                            <PiArrowLineDownRightBold size={20}/>
                        </div>
                        {
                            category.items.map(item => (

                                <div className="pet" key={uuid()}>

                                    <div className="pet__title">{item.name}</div>
                                    <div className="pet__skills">
                                        <div className="pet__skills-title"></div>
                                        <div className="pet__skills-map">
                                            {item.skills.map((t, j, skills) => (

                                                    <span key={uuid()}>
                                                        {` ${t}`}
                                                        {`${(skills.length === j + 1) ? '' : ', '}`}
                                                    </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pet__links">
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
    )
}


export default Pets