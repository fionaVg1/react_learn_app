import React,{PureComponent} from 'react';
import Navbar from './components/navbar'
import ListPage from './components/listPage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { throwStatement } from '@babel/types';
class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      listData:[
        {
          id:1,
          price:5200,
          name:'华为手机',
          count:0
        },
        {
          id:2,
          price:1300,
          name:'魅族手机',
          count:0
        },
        {
          id:3,
          price:10100,
          name:'苹果手机',
          count:0
        },
        {
          id:4,
          price:4300,
          name:'oppo手机',
          count:0
        }
      ]
    }
  }

  handleDecrease=(id)=>{
    const _data = this.state.listData.map(item=>{
      if(item.id === id){
        const _item = {...item};
        _item.count --;
        if(_item.count<0){
          _item.count = 0;
        }
          return _item;
        }else{
          return item;
        }
      }
    );
    this.setState({
      listData:_data
    });
  }
  handleIncrease=(id)=>{
    const _data = this.state.listData.map(item=>{
      if(item.id === id){
        const _item = {...item};
        _item.count ++;      
          return _item;
        }else{
          return item;
        }
      }
    );
    this.setState({
      listData:_data
    });       
  }
  handleDelete = (id)=>{
    const _list = this.state.listData.filter(item => item.id !== id);
    this.setState({
      listData:_list
    });
  }
  handleAmount = ()=>{
    const _list = this.state.listData.concat([]);
    _list.pop();
    this.setState({
      listData:_list
    })
  }
  handleReset = ()=>{
    const _list = this.state.listData.map(item=>{
      const _item = {...item};
      _item.count = 0;
      return _item;
    })
    this.setState({
      listData:_list
    })
  }
  render() { 
    return ( 
      <>
      <Navbar handleReset={this.handleReset} total={this.state.listData.length}/>
      <ListPage listData={this.state.listData}      
      handleDelete ={this.handleDelete} 
      handleIncrease ={this.handleIncrease}
      handleDecrease ={this.handleDecrease}/>
      </>
     );
  }
}
 
export default App;
