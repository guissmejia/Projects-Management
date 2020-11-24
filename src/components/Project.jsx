import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../assets/styles/components/Project.scss'

const Project = ({ name, imgSrc }) => {
  return (
      <ul className="Project__item">
        <li>
          <Link to="/">{name}</Link>  
          <img src={imgSrc} alt={name} />
        </li>
      </ul>
  );
};

Project.proptypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string
}

export default Project;