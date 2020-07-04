import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {updateName,queryAsyncName} from '@/actions/home'
import {connect} from 'react-redux';
@connect((state)=>state.HomeReducer,
(dispatch)=>({
    updateName:(params)=>dispatch(updateName(params)),
    queryAsyncName:(params)=>dispatch(queryAsyncName(params))
})
)
class Home extends Component {
    handleClick = ()=>{
        const {updateName,queryAsyncName} = this.props;
        queryAsyncName(123);
    }
    render() { 
        const {homeName} = this.props;
        return ( 
            <div>
                <div>
                {homeName}
                </div>
                <button type="button" onClick={this.handleClick}/>
            </div>
            
         );
    }
}

Home.propTypes = {
    homeName: PropTypes.string,
    updateName:PropTypes.func,
    updateAsyncName:PropTypes.func
}

Home.defaultProps = {
    homeName:'',
    updateName:()=>({}),
    updateAsyncName:()=>({})
}
 
export default Home;