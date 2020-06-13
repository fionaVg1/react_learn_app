import React,{PureComponent} from 'react'
import style from './listItem.module.css'
import classnames from 'classnames/bind'
import cn from 'classnames'
const cls = classnames.bind(style)

class ListItem extends PureComponent {
    constructor(props){
        super(props)        
    }   
    //执行render方法前调用的
    //render方法是虚拟dom重新渲染，并不是真实dom重现渲染
    //PureComponent完全可以代替shouldComponentUpdate的逻辑
    // shouldComponentUpdate(nextProps,nextState){
    //     if(this.state.count === nextState.count){
    //         return false;
    //     }
    //     if(this.props.id === nextProps.id){
    //         return false;
    //     }
    //     return true;
    // }
    render() { 
        return ( 
            <div className="row mb-3">
                <div className="col-6 themed-grid-col">
                    <span className={cls('title')}>
                        {this.props.data.name}
                    </span>
                </div>
                <div className="col-1 themed-grid-col">
                ¥{this.props.data.price}
                </div>
                <div className={`col-2 themed-grid-col${this.props.data.count?'':'-gray'}`}>
                    <button onClick={()=>{this.props.onDeCrease(this.props.data.id)}} type="button" className="btn btn-primary">-</button>
                    <span className={cls('digital')}>{this.props.data.count}</span>
                    <button onClick={()=>{this.props.onInCrease(this.props.data.id)}} type="button" className="btn btn-primary">+</button>
                </div>
                <div className="col-2 themed-grid-col">¥{this.props.data.price*this.props.data.count}</div>
                <div className="col-1 themed-grid-col">
                    <button onClick={()=>{this.props.onDelete(this.props.data.id)}} className="btn btn-danger btn-sm">删除</button>
                </div>
            </div>
        );
    }
}
 
export default ListItem;