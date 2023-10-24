import { Link } from 'react-router-dom'

import './pets.scss'
import { useState } from 'react'

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
        <div className={`pets__content ${contentHidden ? '_hide' : '' }`} >
            {
                petsData.map((category, index) => (
                    <div className='pets__chapter'>
                        <div className="category">{category.category}</div>
                        {
                            category.items.map(item => (

                                <div className="pet">

                                    <div className="pet__title">{item.name}</div>
                                    <div className="pet__skills">
                                        <div className="pet__skills-title">Технологии: </div>
                                        <div className="pet__skills-map">
                                            {item.skills.map((t, j, skills) => (
                                                <>
                                                    <span>
                                                        {` ${t}`}
                                                    </span>
                                                    {`${(skills.length === j + 1) ? '' : ', '}`}
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pet__links">
                                        {
                                            Object.entries(item.links).map((link, j, arr) => (
                                                <>
                                                    <Link to={link[1]}>
                                                        {`${link[0]}`}
                                                    </Link>
                                                    {`${(arr.length === j + 1) ? '' : ', '}`}
                                                </>
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