import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import '../assets/styles/App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
} 

export default App;
