import React from 'react'
import Projects from '../components/Projects'
import '../assets/styles/containers/Home.scss'

class Home extends React.Component {
  render(){
    return (
      <>
      <main className="Main__container">
        <Projects/>
      </main>
      </>
    )
  }
}

export default Home