import React from 'react'
import { Icon } from '@iconify/react';

export const home_data = [
    {
      title: "Watts",
      icon: <Icon icon="ph:list-light" />,
      bg: "images/main_bg.png",
      info: "We’re powered by our people",
      para: "Property and construction specialists working nationally to deliver increased value across all asset classes within the public and private sectors",
      services: [
        {title: "Building Surveying", url: "/buying"},
        {title: "Project Management", url: "/project"},
        {title: "Cost Management", url: "/cost"},
        {title: "Independent Monitoring", url: "/monitoring"},
        {title: "Public Sector", url: "/public"},
      ],
      content: [
        {
            id: 1,
            position: "right",
            title: "Our Projects",
            img1: "images/editorium.png",
            img2: "images/grid1.png",
            info: "Our specialist teams have built an enviable track record at every scale, in all sectors, bringing shared knowledge, understanding, expertise and best practice.",
            more: "Find out more ..."
        },
        {
            position: "left",
            title: "Our People",
            img1: "images/employee.png",
            img2: "images/grid2.png",
            info: "We’re an established independent business that retains relationships through our experience, technical excellence, shared knowledge and nurturing talent.",
            more: "Find out more ..."
        },
        {
            position: "right",
            title: "Our Insight",
            img1: "images/beach.png",
            img2: "images/grid2.png",
            info: "We continue our commitment to sharing industry knowledge by providing technical and legal updates across a comprehensive spread of topics through the Watts Pocket Handbook, on-line articles and thought leadership.",
            more: "Find out more ..."
        },
      ]
    }
]

export const infos = [
    {
        label: "Project Management", bg: "black", text: "white"
    },
    {
        label: "Building Surveying", bg: "white", text: "black"
    },
    {
        label: "Cost Management", bg: "blue", text: "white"
    },
    {
        label: "Independent Monitoring", bg: "white", text: "black"
    },
    {
        label: "Public Sector", bg: "blue", text: "white"
    },
    {
        label: "Technical Due Diligence", bg: "white", text: "black"
    }
]
export const my_slider = [
        {
            id: 1,
            position: "right",
            title: "Our Projects",
            img1: "images/editorium.png",
            img2: "images/grid1.png",
            info: "Our specialist teams have built an enviable track record at every scale, in all sectors, bringing shared knowledge, understanding, expertise and best practice.",
            more: "Find out more ..."
        },
]

export const footer =[
    { title: "Watts",
    services: [
        {title: "Building Surveying", url: "/buying"},
        {title: "Project Management", url: "/project"},
        {title: "Cost Management", url: "/cost"},
        {title: "Independent Monitoring", url: "/monitoring"},
        {title: "Public Sector", url: "/public"},
    ],
    content: [
        {title: "Projects", url: "/projects"},
        {title: "Our People", url: "/people"},
        {title: "Insights", url: "/insights"},
        {title: "Our Responsibilities", url: "/responsibilities"},
        {title: "Contact", url: "/contact"},
        {title: "", img:  'images/footer_icon.png', url:"/xer"},
        {title: "", icon: <Icon icon="devicon:linkedin" />, url:"/linkedin"},
    ],
    info: "Telephone: +44 (0)20 7280 8000 | Registered office: 1 Great Tower Street, London, EC3R 5AA. Company Registration number: 05728557 © 2000 - 2023 Watts Group Limited. All rights reserved.",
    privacy: [
        {title: "Design by Small Back Room", url: "/privacy-small-back-room"},
        {title: "Privacy Policy +Terms of use", url: "/privacy"}
    ]
    },
]

export const login = [
    { 
        title: "Login", url: "/login",
        form: [
            {label: "Email", name: "email", type: "text", placeholder: "Enter your email",
            rules : {
                required: 'Email is required',
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                }
            }
        },
            {label: "Password", name: "password", type: "password", placeholder: "Enter your password",
            rules : {
                required: 'Password is required',
                minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                }
            }
        },
        ]
    }
]

export const register = [
    {
        title: "Register", url: "/register",
        form: [
            {
                label: "Username", name: "username", type: "text", placeholder: "Enter your username",
                rules : {
                    required: 'Username is required',
                }
            },
            {label: "Email", name: "email", type: "text", placeholder: "Enter your email",
            rules : {
                required: 'Email is required',
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                }
            }
        },
            {label: "Password", name: "password", type: "password", placeholder: "Enter your password",
            rules : {
                required: 'Password is required',
                minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                }
            }
        },
        ]
    }
]

export const building_servey = [
    {
        title : "Watts",
        title2 : "Building Surveying",
        image: "images/employee.png",
        info: "Our commercially aware and pragmatic advice based on insight and understanding, helps our clients make informed decisions.",
        para: "Our nationwide professional surveying experience and technical knowledge builds trust and confidence with clients and professional partners. By doing what we do well, we help continually drive performance and value.",
    }
]