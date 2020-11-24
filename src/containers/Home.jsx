import React from 'react';
import Projects from './Projects';
import Employees from './Employees';
import '../assets/styles/containers/Home.scss';

const Home = () => {

  return (
    <>
      <main className="Main__container">
        <Projects />
        <Employees />
      </main>
    </>
  );
};

export default Home;