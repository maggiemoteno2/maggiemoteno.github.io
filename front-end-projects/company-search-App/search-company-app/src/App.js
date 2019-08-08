import { Component } from "react";
import React from 'react';
import CompanyNames from "./Components/CompanyNames";
import CompanyInformation from "./Components/CompanyInformation";
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companies: [],
      isLoaded: false,

    }
  }


  componentDidMount() {
    fetch('https://api-v2.intrinio.com/companies?api_key=OjkwNjBhMzgzZDI2NjM5MjYzNTlmMjExNGMxYjYyZmFh')
      .then(results => results.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          companies: json.companies,
        })
      }).catch(error => {
        console.log(error);
      })
  }






  render() {

    const { companies } = this.state;

    return (
      <Router>
      <div>
        <CompanyInformation />
        <Route path='/companyInfo/:id'
          exact
          strict
          render={ (props) => <CompanyInformation {...props} companies={companies}/>} />
        <Route path='/' 
        exact
        strict
        render={(props) => <CompanyNames {...props} companies={companies}/>} />
      </div>
      </Router>
    );
  }
}