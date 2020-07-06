import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CustomContext from './button-context'
class NewButton extends Component {
    state = {  }
    static contextType = CustomContext;
    static propTypes = {
        children:PropTypes.string
    }
    static defaultProps = {
        children:'默认文章'
    }
    render() { 
        const {children} = this.props;
        return ( 
            <button type="button" style={{color:this.context}}>
                {children}
            </button>
         );
    }
}
 
export default NewButton;