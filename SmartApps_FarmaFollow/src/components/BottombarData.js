import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

export const BottombarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Logboek',
        path: '/logboek',
        icon: <FaIcons.FaHospitalAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Profiel',
        path: '/profile',
        icon: <MdIcons.MdAccountCircle/>,
        cName: 'nav-text'
    }
]