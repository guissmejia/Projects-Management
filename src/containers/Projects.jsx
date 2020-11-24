import React from "react";
import Project from '../components/Project'
import useProjectsState from '../hooks/useProjectsState'
import "../assets/styles/containers/Projects.scss";

const API = 'https://projects-management-api.vercel.app/api/projects';

const Projects = () => {

  const projectsState = useProjectsState(API);

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
         {projectsState.map((item) => {
           return(
          <Project
            key={item._id}
            {...item}
          />
           );
         })}
       </div>
      </div>
    </section>
  );
};

export default Projects;
