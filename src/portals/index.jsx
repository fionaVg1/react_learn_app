import React, { Component } from 'react';
import PortalComponent from './portalComponent';
class PortalsTest extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Portals API
                <div id="mount"/>
                <div className="portal-parent">
                    <PortalComponent/>
                </div>
            </div>
         );
    }
}
 
export default PortalsTest;