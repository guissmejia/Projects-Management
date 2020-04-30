import React from "react";
import Project from '../components/Project'
import ProjectsData from '../data/projectsData'
import "../assets/styles/components/Projects.scss"

const Projects = () => {
  return (
    <section className="Projects">
      <h3>Lista de empleados</h3>
      <div className="Projects__container">
        <div className="Projects__filter">
          <input type="checkbox" />
          <p>Todos los empleados</p>
        </div>
       <div className="Projects__items">
        <h4>Proyecto</h4>
         {ProjectsData.map(({ id, name, category, imgSrc}) => {
           return(
          <Project
            key={id}
            name={name}
            category={category}
            imgSrc={imgSrc}
          />
           );
         })}
       </div>
      </div>
    </section>
  );
};

export default Projects;
