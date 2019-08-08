import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import CompanyNames from './CompanyNames';
export default class CompanyInformation extends Component {


    getMeUserInfo() {
    // TODO REFACTOR  

        const { match, companies } = this.props;
        setInterval(() => {
        }, 3000)

        if (match !== undefined) {
            const company = companies.find(company => company.id == match.params.id);

            return (<div>
                <p>company name:{company !== undefined ? company.name : null}</p>
                <p>number of employees:{company !== undefined ? company.cik : null}</p>
                <p>company id:{match !== undefined ? this.props.match.params.id : null}</p>
                <p>company stock exchange:{company !== undefined ? company.lei : null}</p>
                <p>industry Group:{company !== undefined ? company.ticker : null}</p>
        
        
           <NavLink className='back-btn'to='/'>back</NavLink>
            
            </div>)
        }

    }

    render() {
        return (
            <div>
                {this.getMeUserInfo()}
                
            </div>

        )
    }
}