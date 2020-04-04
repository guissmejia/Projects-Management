import React from 'react'
import '../assets/styles/components/Project.scss'

const Project = ({ name, category, imgSrc }) => {
  return (
      <ul className="Project__item">
        <li>
          <a href="/">{category}</a>
          <img src={imgSrc} alt={name} />
        </li>
      </ul>
  );
};

export default Project