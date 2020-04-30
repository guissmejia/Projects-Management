import React from 'react'
import Projects from './Projects'
import Employees from './Employees'
import '../assets/styles/containers/Home.scss'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      // modalIsOpen: false,
      name: '',
      lastname: '',
      jobTitle: '',
      salary: '',
      availavility: '',
      status: '',
      project: '',
    };
  }

//Estado del modal
  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
    e.preventDefault();
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
    e.preventDefault();
  };

 // Captura los inputs del formulario 
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

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
            onAddEmployee={this.handleCreateEmployee}
            onHandleChangeAdd={this.handleChange}
          />
        </main>
      </>
    );
  }
}

export default Home