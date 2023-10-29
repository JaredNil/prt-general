
import { Link } from 'react-router-dom';

import './return.scss'

const Return = () => {
    return (
        <section className="return">
            <div className="return__fish">
                {
                    new Array(5).fill('sth')
                        .map((lnk, index, arr) => {
                            return (
                                <>
                                    <span>
                                    { 
                                        (index!==0) 
                                        ? ` / ` 
                                        : ''
                                    }
                                    </span>
                                    <Link className={
                                        `pieceOfFish 
                                        ${(index === (arr.length-1) ? 'last_lnk' : '')}
                                        `}>
                                        {lnk}
                                    </Link>
                                </>
                            )
                        })
                }
            </div>
            <div className="return__back">
                <Link to={'/'}>
                    На главную
                </Link>
            </div>
        </section>
    )
}

export default Return