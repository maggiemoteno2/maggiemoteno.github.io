import { Component } from "react";
import React from 'react'
import { NavLink } from 'react-router-dom'


export default class CompanyNames extends Component {

  render() {
    const { companies } = this.props;
    return (

      <div>
        <header>
          <h1 className="company-list">List of Companies</h1>
        </header>

        {companies.length !== 0 ?
          companies.map((company) =>
            <li id='list'><NavLink className="Nav-Link"to={`companyInfo/${company.id}`}>{company.name} </NavLink> </li>) : 'loading'}
          
      </div>
      
    );
  }

}





