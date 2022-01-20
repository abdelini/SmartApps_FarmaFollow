import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Mijn Profiel',
        path: '/profile',
        icon: <MdIcons.MdAccountCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Tips voor uw kind',
        path: '/tips',
        icon: <FaIcons.FaChild/>,
        cName: 'nav-text'
    },
    {
        title: 'Medicatie',
        path: '/medicatie',
        icon: <FaIcons.FaClinicMedical/>,
        cName: 'nav-text'
    },
    // {
    //     title: 'Privacy',
    //     path: '/privacy',
    //     icon: <MdIcons.MdPrivacyTip/>,
    //     cName: 'nav-text'
    // },
    {
        title: 'Logboek',
        path: '/logboek',
        icon: <MdIcons.MdOutlineFeed/>,
        cName: 'nav-text'
    }
]