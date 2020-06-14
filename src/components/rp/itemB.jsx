import React ,{Component} from 'react';
import WithTooltip from './withTooltip'
const ItemB = (props) => {
    return ( 
        <div className="container">
            <WithTooltip render={({showTooltip,content})=>(
                <div>
                    <button className="btn btn-primary" type="btn">Tooltip B</button>
                     {showTooltip &&(
                        <span className="badge badge-pill badge-primary ml-2">
                            {content}
                        </span>
                     )}
               </div> 
            )}/>            
        </div>
     );
}
 
export default ItemB;