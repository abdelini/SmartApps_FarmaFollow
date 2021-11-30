import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
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
        title: 'Informatie Kind',
        path: '/child',
        icon: <FaIcons.FaChild/>,
        cName: 'nav-text'
    },
    {
        title: 'Informatie Dokter',
        path: '/doctor',
        icon: <FaIcons.FaClinicMedical/>,
        cName: 'nav-text'
    },
    {
        title: 'Privacy',
        path: '/privacy',
        icon: <MdIcons.MdPrivacyTip/>,
        cName: 'nav-text'
    },
    {
        title: 'Terms & Conditions',
        path: '/terms',
        icon: <MdIcons.MdOutlineFeed/>,
        cName: 'nav-text'
    }
]