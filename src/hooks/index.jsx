import React ,{useState} from 'react';
import {render} from 'react-dom';
function MyHooks(){
    const [name,setName] = useState('云课堂');
    return(
        <div>
            <div>{name}</div>
            <button type="button" onClick={()=>setName('hooks 原理')}>修改</button>
        </div>
    )
}
export default MyHooks;