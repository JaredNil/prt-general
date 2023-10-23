import { Link } from 'react-router-dom'

import { BsChevronBarRight } from 'react-icons/bs'

import './pets.scss'

const Pets = () => {
    return (
        <div className="pets">

            <div className="pets__head">
                <div className="pets__head-title">Projects:</div>
                <BsChevronBarRight size={30} />
            </div>

            <div className="pets__sidebar">

                <div className="pets__category">React</div>

                <div className="pets__item">
                    <div className="item__label"><span>●</span> label</div>
                    <div className="item__text">
                        <div className="item__text-title">Project №1</div>
                        <div className="item__text-skill">TS, Redux</div>
                    </div>
                    <div className="item__link">
                        {/* <Link to={'/'} className='item__link-btn'>GH</Link> */}
                    </div>
                </div>

                <div className="pets__item">
                    <div className="item__label"><span>●</span> label</div>
                    <div className="item__text">
                        <div className="item__text-title">Project №2</div>
                        <div className="item__text-skill">TS, Redux</div>
                    </div>
                    <div className="item__link">
                        {/* <Link to={'/'} className='item__link-btn'>GH</Link> */}
                    </div>
                </div>

                {true &&
                    ( <>
                    <div className="pets__category">Next</div>

<div className="pets__item">
    <div className="item__label"><span>●</span> label</div>
    <div className="item__text">
        <div className="item__text-title">Project №3</div>
        <div className="item__text-skill">TS, Redux</div>
    </div>
    <div className="item__link">
        <Link to={'/'} className='item__link-btn'>GH</Link>
    </div>
</div>

<div className="pets__item">
    <div className="item__label"><span>●</span> label</div>
    <div className="item__text">
        <div className="item__text-title">Project №4</div>
        <div className="item__text-skill">TS, Redux</div>
    </div>
    <div className="item__link">
    <Link to={'/'} className='item__link-btn'>GH</Link>
    </div>
</div>

<div className="pets__category">MERN</div>

<div className="pets__item">
    <div className="item__label"><span>●</span> label</div>
    <div className="item__text">
        <div className="item__text-title">Project №3</div>
        <div className="item__text-skill">TS, Redux</div>
    </div>
    <div className="item__link">
        <Link to={'/'} className='item__link-btn'>GH</Link>
    </div>
</div>

<div className="pets__item">
    <div className="item__label"><span>●</span> label</div>
    <div className="item__text">
        <div className="item__text-title">Project №4</div>
        <div className="item__text-skill">TS, Redux</div>
    </div>
    <div className="item__link">
        <Link to={'/'} className='item__link-btn'>GH</Link>
    </div>
</div>

<div className="pets__category">Layout {'(Tailwind/SASS)'}</div>

<div className="pets__item">
    <div className="item__label"><span>●</span> label</div>
    <div className="item__text">
        <div className="item__text-title">Project №3</div>
        <div className="item__text-skill">TS, Redux</div>
    </div>
    <div className="item__link">
        <Link to={'/'} className='item__link-btn'>GH</Link>
    </div>
</div>

<div className="pets__item">
    <div className="item__label"><span>●</span> label</div>
    <div className="item__text">
        <div className="item__text-title">Project №4</div>
        <div className="item__text-skill">TS, Redux</div>
    </div>
    <div className="item__link">
        <Link to={'/'} className='item__link-btn'>GH</Link>
    </div>
</div>
                    </>)
                }

            </div>

        </div>
    )
}


export default Pets