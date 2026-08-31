import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaPython} from 'react-icons/fa';
import { SiAdobephotoshop } from "react-icons/si";
import websiteCar from './assets/website-car.png';
import budget from './assets/budget.png';
import ecomerce from './assets/ecomerce.png';
import shoes from './assets/img-1.jpg';
import home from './assets/img-3.jpg';
import bottle from './assets/bottle.jpg';




export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Python for developing and customizing Odoo systems, building robust business applications, automating workflows, and optimizing backend processes to support enterprise needs.',
  },
  {
    id: nanoid(),
    title: 'PhotoShop',
    icon:   <SiAdobephotoshop className='h-16 w-16 text-sky-800'/>,
    text: 'I used to learn Photoshop to create design projects during my second year of universit.',
  },
  

];

export const projects = [
  {
    id: nanoid(),
    img: websiteCar,
    title: 'first project',
    text: 'Build Website Car Rental AVR Cambodia Using Odoo',
  },
  {
    id: nanoid(),
    img: budget,
    title: 'second project',
    text: 'Build Website Budget Cambodia Using Odoo',
  },
  {
    id: nanoid(),
    img: ecomerce,
    title: 'third project',
    text: 'Build Website E-Commerce using React Js with Tailwind',
  },
  {
    id: nanoid(),
    img: shoes,
    title: 'third project',
    text: 'Design Poster shoes using Photoshop',
  },
  {
    id: nanoid(),
    img: home,
    title: 'fourth project',
    text: 'Design home using Photoshop',
  },
  {
    id: nanoid(),
    img: bottle,
    title: 'fifth project',
    text: 'Design bottle using Photoshop',
  },
];
