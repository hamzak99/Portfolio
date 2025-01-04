import { DiReact } from "react-icons/di";
import { FaNodeJs, FaWordpress } from "react-icons/fa";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiMariadbfoundation,
  SiMongodb,
  SiNginx,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { SiFiverr, SiJavascript } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { SiDjango, SiSocketdotio } from "react-icons/si";
import { cub3d, inception, webserver, ft_transcendence } from "./images";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "ft_transcendence",
    image: { ft_transcendence },
    category: "Web",
    data: {
      description: `ft_transcendence is a multiplayer gaming and chat platform developed as part of the 42 curriculum. 
      The project features real-time Pong gameplay, WebSocket-based chat , and OAuth2 authentication. 
      Built with Django/DRF backend and vanilla Js frontend. Docker containerization ensures scalable deployment, while PostgreSQL handles 
      data persistence`,
      demoLink: "https://github.com/yassineidrissi/ft_transcendence",
    },
    stack: [
      {
        name: "Vanilla JS",
        icon: <SiJavascript />,
        iconColor: "#F7DF1E",
      },
      {
        name: "Python",
        icon: <SiPython />,
        iconColor: "#3776AB",
      },
      {
        name: "Django",
        icon: <SiDjango />,
        iconColor: "green",
      },
      {
        name: "DRF",
        icon: <TbApi />,
        iconColor: "green",
      },
      {
        name: "WebSocket",
        icon: <SiSocketdotio />,
        iconColor: "#34A853",
      },
      ,
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        iconColor: "#336791",
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        iconColor: "blue",
      },
    ],
  },
  {
    id: 2,
    title: "Inception",
    image: { inception },
    category: "Web",
    data: {
      description: `Inception introduces you to system administration concepts by leveraging Docker and Docker Compose. 
        This project involves deploying multiple services in isolated containers while ensuring scalability, 
        network configuration, and system orchestration.`,
      demoLink: "https://github.com/hamzak99/inception",
    },
    stack: [
      {
        name: "Docker",
        icon: <SiDocker />,
        iconColor: "#2496ED",
      },
      {
        name: "Nginx",
        icon: <SiNginx />,
        iconColor: "#009639",
      },
      {
        name: "MariaDB",
        icon: <SiMariadbfoundation />,
      },
      {
        name: "Wordpress",
        icon: <FaWordpress />,
        iconColor: "#21759B",
      },
    ],
  },
  {
    id: 3,
    title: "WebServer",
    image: { webserver },
    category: "Web",
    data: {
      description: `Build a basic HTTP server from scratch using C++. This project focuses on handling HTTP requests, 
        managing connections, and implementing socket programming. The server processes client requests, serves static files, 
        and supports HTTP/1.1 functionality.`,
      demoLink: "https://example.com/demo-webserver",
    },
    stack: [
      {
        name: "C++",
        icon: <SiCplusplus />,
        iconColor: "#00599C",
      },
    ],
  },
  {
    id: 4,
    title: "Project Management application",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png",
    category: "Apps",
    data: {
      description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                       Elevate your project management experience and achieve success with ease.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 5,
    title: "Mobile bank - App Design",
    image:
      "https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png",
    category: "UI/UX",
    data: {
      description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ],
  },
  {
    id: 6,
    title: "Quiz App Development",
    image:
      "https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg",
    category: "Apps",
    data: {
      description: `Elevate engagement and knowledge retention with our Quiz App 
                      Development project. Seamlessly crafted for interactive learning 
                      experiences, our app offers customizable quizzes, real-time feedback, 
                      and captivating visuals. Empower users to test their knowledge anytime,
                       anywhere, fostering a dynamic learning environment tailored to their 
                       needs.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
];

export const experience = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
      },
      {
        skill: "Sketch",
        level: "Intermediate",
      },
      {
        skill: "XD",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "React Native",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node JS",
        level: "Experienced",
      },
      {
        skill: "MangoDB",
        level: "Intermediate",
      },
      {
        skill: "PHP",
        level: "Experienced",
      },
      {
        skill: "Python",
        level: "Intermediate",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];
