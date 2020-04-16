import React from 'react'
import Projects from '../components/Projects'
import Employees from '../components/Employees'
import '../assets/styles/containers/Home.scss'

class Home extends React.Component {
  state = {
    modalIsOpen: false,
  }

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
    e.preventDefault();    
  }

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
    e.preventDefault();
  }

  // handleEditEmployee = async e => {

  // }

  // handleDeleteEmployee = async e => {

  // }

  render() {
    return (
      <>
        <main className="Main__container">
          <Projects />
          <Employees
            onOpenModal={this.handleOpenModal}
            onCloseModal={this.handleCloseModal}
            modalIsOpen={this.state.modalIsOpen}
            onEditEmployee={this.handleEditEmployee}
            onDeleteEmployee={this.handleDeleteEmployee}
          />
        </main>
      </>
    );
  }
}

export default Home