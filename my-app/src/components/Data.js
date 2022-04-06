import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

export const Data = [
    {
        title: 'Accueil',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Produits',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'A propos',
        path: '/about',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Formulaires',
        path: '/forms',
        icon: <AiIcons.AiOutlineForm />,
        cName: 'nav-text'
    },
]