import React from "react";
import "./Projects.css";
import { projects } from "../../data.js";
import Card from "./Cards/index.jsx";
import { sumArr } from "../../helper/index";
// const tabs = [
//   { name: "All" },
//   { name: "Web" },
//   { name: "UI/UX" },
//   { name: "Apps" },
// ];
const tabs = [
  { name: "All" },
  { name: "Web" },
  { name: "Game Development" },
  { name: "Systems & Networking" },
];
const Projects = () => {
  const [displayableProjects, setDisplayableProjects] =
    React.useState(projects);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [indicatorWidth, setIndicatorWidth] = React.useState(0);
  const itemsEls = React.useRef(new Array());

  React.useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(sumArr(prevEl.map((item) => item.offsetWidth)));
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);

  const setProjects = (category) => {
    if (category === "All") return setDisplayableProjects(projects);
    const proj = projects.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setDisplayableProjects(proj);
  };
  return (
    <section id="projects">
      <div className="section_wrapper projects_container">
        <div className="section_header center">
          <h2 className="primary_title">Projects</h2>
        </div>

        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              key={index}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="active_indicator"
            style={{ left: `${offset}px`, width: `${indicatorWidth}px` }}
          ></span>
        </nav>
        <div className="card_container">
          {displayableProjects.map((project, index) => (
            <Card
              title={project.title}
              image={project.image}
              data={project.data}
              stack={project.stack}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
