import React, { Component } from 'react';
import {createPortal} from 'react-dom';
class PortalComponent extends Component {
    constructor(props){
        super(props);
        this.mountNode = document.createElement('div');
    }
    compomentDidMount(){
        const mount = document.querySelector('#mount');
        mount.appendChild(this.mountNode);
    }
    render() { 
        return createPortal( 
            <div>
                Portal Child
            </div>,
            this.mountNode
         );
    }
}
 
export default PortalComponent;