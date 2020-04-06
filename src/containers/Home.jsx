import React from 'react'
import Projects from '../components/Projects'
import Employees from '../components/Employees'
import '../assets/styles/containers/Home.scss'

class Home extends React.Component {
  render(){
    return (
      <>
      <main className="Main__container">
        <Projects/>
        <Employees/>
      </main>
      </>
    )
  }
}

export default Home