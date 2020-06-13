import React from "react";
const NavBar = (props) => {
    return (       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="wrap">
                    <span className="title">NAVBAR</span>
                    <span className="badge badge-pill badge-primary ml-2 mr-2">
                        {props.total}
                    </span>
                    <button onClick={props.handleReset} className="btn btn-outline-success my-2 my-sm-0 fr" type="button">Reset</button>
                </div>
            </div>
        </nav>        
    );
}
 
export default NavBar;