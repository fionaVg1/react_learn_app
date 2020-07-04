import * as types from '../mutation-types'
export function queryName(params){
    return {
        type:types.QUERY_GLOBAL_NAME,
        payload:params
    }
}
export function udpateName(params){
    return {
        type: types.UPDATE_GLOBAL_NAME,
        payload:params
    }
}
export function queryAsyncName(params){
    return (dispatch,getState)=>{
        setTimeout(()=>{
            dispatch({
                type:types.QUERY_GLOBAL_NAME,
                payload:params
            });
        },2000);
    }
}