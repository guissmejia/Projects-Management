import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Project.scss'

const Project = ({ name, category, imgSrc }) => {
  return (
      <ul className="Project__item">
        <li>
          <Link to="/">{category}</Link>
          <img src={imgSrc} alt={name} />
        </li>
      </ul>
  );
};

export default Project