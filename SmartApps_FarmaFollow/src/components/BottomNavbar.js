import React from 'react'
//import * as FaIcons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import { BottombarData } from './BottombarData';
import './BottomNavbar.css';
import {IconContext} from 'react-icons'


function BottomNavbar() {
    //const [bottombar, setBottombar] = useState(true)

    return (
        <div>
          <IconContext.Provider value={{color: '#fff'}, {fontsize: 30}}>
                <nav className='bottom-nav'>
                    <ul className='bottom-nav-items'>
                        {BottombarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName, 'bottombar-item'}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
          </IconContext.Provider>
        </div>
    )
}

export default BottomNavbar
