import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Home extends Component {
    state = {  }
    static childContextTypes = {
        color:PropTypes.string
    }
    constructor(props){
        super(props);
        this.state = {
            color:'#28a745'
        }
    }
    getChildContext(){
        const {color} = this.state;
        return {
            color
        }
    }
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default Home;