import React from 'react';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classNames';
import {connect} from 'dva';
import SideBar from './sider';
import HeaderBar from './header';
import Context from './context';
import { Layout,} from 'antd';
import styles from './index.css';

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

const {
  Header, Footer,Sider,
} = Layout;


class BasicLayout extends React.Component{
 changeMenu=(key)=>{
   return this.props.history.push(`/${key}`)
 }
 
  render(){
    return (
      <React.Fragment>
                  <Layout>
                  {/* 侧边栏 */}
                  <Sider  
                    trigger={null}
                    width={260}
                    collapsible
                    collapsed={this.props.app.collapsed}    
                    style={ { overflow: 'auto', height: '100vh', position: 'fixed', left: 0 , background: this.props.app.theme == 'dark'? '#001529':'#fff'}} 
                    >    
                    <SideBar  changeMenu={this.changeMenu}></SideBar>
                  </Sider>
                        <Layout style={this.props.app.collapsed?{ marginLeft: 80 } :{marginLeft: 260}} >
                          {/* 头部 */}
                          <Header style={{ background: '#fff', padding: 0 }}>
                            <HeaderBar></HeaderBar>
                          </Header>
                          <ContainerQuery query={query}>
                            { params => (
                            <div className={ classNames(params)}>
                          <Layout style={{ margin: '20px 14px 0' , overflow: 'initial', minHeight: '100vh', padding: '10px'}}>
                            {/* 内容部分 */}
                            <Context  {...this.props}></Context>
                            </Layout>
                            </div>
                          )}
                        </ContainerQuery>
                          {/* 尾部 */}
                          <Footer style={{ textAlign: 'center', background: '#fff'}}>
                            Ant Design ©2018 Created by Ant UED
                          </Footer>
                        </Layout>
                </Layout>
      </React.Fragment>
    )
  }
}
export default connect(state=>state)(BasicLayout);
