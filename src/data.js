import React from 'react';
import { FaFacebook,FaGithub,FaInstagramSquare,FaLinkedin } from 'react-icons/fa';
export const links = [
  {
    id:1,
    url:'/',
    text:'Random',
  },
  {
    id:2,
    url:'/about',
    text:'About',
  },
  {
    id:3,
    url:'/projects',
    text:'Projects',
  },
  {
    id:4,
    url:'/contact',
    text:'Contact',
  },
  {
    id:5,
    url:'/profile',
    text:'Profile',
  },
]

export const social =[
  {
    id:1,
    url:'https://www.facebook.com/Manojkumar75855/',
    icon:<FaFacebook/>,
  },
  {
    id:2,
    url:'https://www.instagram.com/manoj_kumar96/',
    icon:<FaInstagramSquare/>
  },
  {
    id:3,
    url:'www.linkedin.com/in/manojkumar-a-382b04197',
    icon:<FaLinkedin/>
  },
  {
    id:4,
    url:'https://github.com/Manojkumar-13',
    icon:<FaGithub/>
  }
]