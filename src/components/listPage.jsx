import React,{PureComponent} from 'react';
import ListItem from './listItem';
class ListPage extends PureComponent {
    renderList(){
        return this.props.listData.map(item=>{
          return <ListItem key={item.id} data={item} onDelete={this.props.handleDelete} onInCrease = {this.props.handleIncrease} onDeCrease = {this.props.handleDecrease}/>
        })
    }

    render() { 
        return ( 
        <div className="container">           
            {this.props.listData.length === 0 && <div className="text-center">购物车是空的</div>}
            {this.renderList()}
         </div>
       );
    }
}
 
export default ListPage;