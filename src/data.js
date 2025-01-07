import { FaWordpress } from "react-icons/fa";
import {
  SiCplusplus,
  SiDocker,
  SiMariadbfoundation,
  SiNginx,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import { SiDjango, SiSocketdotio } from "react-icons/si";
import { cub3d, inception, webserver, ft_transcendence } from "./images";

export const menu = [
  { name: "About" },
  { name: "Skill" },
  { name: "Projects" },
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
      demoLink: "https://github.com/YKO-01/WebServe",
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
    title: "Cub3d",
    image: { cub3d },
    category: "Web",
    data: {
      description: `Cub3d is a 3D graphics engine developed in C. The project uses raycasting to render a 3D environment and
      allows user navigation through the world using keyboard controls.`,
      demoLink: "https://github.com/hamzak99/cub3D",
    },
    stack: [
      {
        name: "C",
        icon: <SiCplusplus />,
        iconColor: "#00599C",
      },
    ],
  },
];

export const experience = [
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
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Intermediate",
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
        skill: "PostgreSQL",
        level: "Intermediate",
      },
      {
        skill: "django",
        level: "Experienced",
      },
      {
        skill: "Express",
        level: "Intermediate",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/hamzak99",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/hamza-kasbaoui-863a752b7/",
  },
];
