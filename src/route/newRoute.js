//异常处理
import React from 'react'
import HandleError from './HandleError'
import {Route} from 'react-router-dom/index'
import { pathToFileURL } from 'url';
const newRoute = props=>(
    <HandleError>
        <Route {...props}/>
    </HandleError>
);
export * from 'react-router-dom/index'
export {
    newRoute as Route
}

module.exports = {
    resolve:{
        alias:{
            'react-router-dom$':path.join(appDirectory,'router')
        }
    }
}