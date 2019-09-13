import React, { Component } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

class QuoteGenerator extends Component {
    constructor(props){
        super(props);
        this.state={
            quotes:"",
    }
    }
     randomQuote=()=>{
        axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
            .then(resp=>
                this.setState({
                    quotes: resp.data.quotes[Math.floor(Math.random()*102)]
                }))
     }
    componentDidMount=()=>{
         this.randomQuote()
    }


    render() {
        console.log("hfk",this.state.quotes)
        return (

            <div className='quote-box'>
                <p className="quote">{this.state.quotes !== null && this.state.quotes.quote}</p>
                <p className="author">{this.state.quotes !== null && this.state.quotes.author}</p>
                <button className="button" onClick={this.randomQuote}>new quote</button>
                <IconButton
                href={`https://twitter.com/intent/tweet?text="${this.state.quotes.quote}${this.state.quotes.author}"&hashtags=quotes`}
                
                >
                    <FontAwesomeIcon icon={faTwitter}className="icon" size="md"></FontAwesomeIcon>
                </IconButton>
                
            </div>
        );
    }
}

export default QuoteGenerator;