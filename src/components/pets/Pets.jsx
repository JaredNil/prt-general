import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

import {PiArrowLineDownRightBold} from 'react-icons/pi'

import './pets.scss'




const petsData = [
    {
        category: 'React',
        items: [
            {
                name: 'Проект облачного хранилища',
                linkComponent: '/',
                skills: ['TS', 'React', 'Redux', 'Express'],
                links: {
                    'GH': '/',
                    'SYTE': '/'
                }
            },
            {
                name: 'Проект облачного хранилища',
                linkComponent: '/',
                skills: ['TS', 'React', 'Redux', 'Express'],
                links: {
                    'GH': '/',
                    'SYTE': '/'
                }
            },
        ]
    },
    {
        category: 'React',
        items: [
            {
                name: 'Проект облачного хранилища',
                linkComponent: '/',
                skills: ['TS', 'React', 'Redux', 'Express'],
                links: {
                    'GH': '/',
                    'SYTE': '/'
                }
            },
            {
                name: 'Проект облачного хранилища',
                linkComponent: '/',
                skills: ['TS', 'React', 'Redux', 'Express'],
                links: {
                    'GH': '/',
                    'SYTE': '/'
                }
            },
        ]
    },
    {
        category: 'React',
        items: [
            {
                name: 'Проект облачного хранилища',
                linkComponent: '/',
                skills: ['TS', 'React', 'Redux', 'Express'],
                links: {
                    'GH': '/',
                    'SYTE': '/'
                }
            },
            {
                name: 'Проект облачного хранилища',
                linkComponent: '/',
                skills: ['TS', 'React', 'Redux', 'Express'],
                links: {
                    'GH': '/',
                    'SYTE': '/'
                }
            },
        ]
    },
]


const Pets = ({contentHidden}) => {


    return (
        <div
            className={`pets__content ${contentHidden ? '_hide' : '' }`} 
        >
            {
                petsData.map((category, index) => (
                    <div className='pets__chapter' key={uuid()}>
                        <div className="category">
                            {category.category}
                            <PiArrowLineDownRightBold size={20}/>
                        </div>
                        {
                            category.items.map(item => (

                                <div className="pet" key={uuid()}>

                                    <div className="pet__title">{item.name}</div>
                                    <div className="pet__skills">
                                        <div className="pet__skills-title">Технологии: </div>
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