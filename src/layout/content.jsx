import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MyForm from './form'
import MyList from './list'
import MyModal from './modal'
const { Header, Content, Sider } = Layout;
class MyContent extends Component {
    state = {  }
    render() { 
        return ( 
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {/* <MyForm/> */}
                    <MyList/>
                    <MyModal/>
                </Content>
            </Layout>
         );
    }
}
 
export default MyContent;