import React, { Component } from 'react';
import CustomContext from './button-context'
import NewButton from './new-button'
class NewContext extends Component {
    state = {  }
    constructor(props){
        super(props);
        this.state = {
            color:'#28a745'
        }
    }
    render() { 
        return ( 
            <CustomButton.Provider value={color}>
                <NewButton>
                    new context api
                </NewButton>
            </CustomButton.Provider>
         );
    }
}
 
export default NewContext;