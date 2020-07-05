import React, { Component } from 'react';
import { checkPropTypes } from 'prop-types';
import CustomButton from './button'
class Home extends Component {
    state = {  }
    static childContextTypes = {
        color: checkPropTypes.string
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
                <CustomButton>React context demo</CustomButton>
            </div>
         );
    }
}
 
export default Home;