import React from 'react';
import {connect} from 'dva';
import { Menu, Icon,Switch} from 'antd';
import Logo from '../assets/logo.svg';
import styles from './sider.less';

const SubMenu = Menu.SubMenu;

class SiderBar extends React.Component {
  // 改变侧边栏主题颜色
    changeTheme=(value)=>{
        this.props.dispatch({
            type:'app/changeTheme',
            theme: value ? 'dark' : 'light', 
        })
        }
  // 侧边栏伸缩
    handleClick = (e) => {
            this.props.dispatch({
                type:'app/handleClick',
                current: e.key,
            });
          }
  // 菜单页面跳转
    changeMenu=(item)=>{
        let key = typeof item === 'object' ? item.key : item
        // return this.props.history.push(key);
        return this.props.changeMenu(key);
    }
    render(){
        return (
            <div>
            <div className={styles['logo']} style={{background: this.props.app.theme == 'dark'? '#001529':'#fff'}}><div><img src={Logo} alt=""/></div><h1>ANTD ADMIN</h1></div>
               <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme={this.props.app.theme}
                selectedKeys={[this.props.app.current]}
                onClick={this.changeMenu}
              >
                  <Menu.Item key="dashboard">
                    <Icon type="dashboard" />
                    <span>仪表盘</span>
                  </Menu.Item>
                  <Menu.Item key="user">
                    <Icon type="user" />
                    <span>用户管理</span>
                  </Menu.Item>
                  <Menu.Item key="post">
                    <Icon type="shopping-cart" />
                    <span>用户管理</span>
                  </Menu.Item>
                  <Menu.Item key="request">
                    <Icon type="api" />
                    <span>Reaquest</span>
                  </Menu.Item>
                  <SubMenu key="UIElement" title={<span><Icon type="camera" /><span>UI组件</span></span>}>
                      <Menu.Item key="UIElement/editor">
                        <Icon type="edit" />
                        <span>Editor</span>
                      </Menu.Item>
                  </SubMenu>
                  <SubMenu key="chart" title={<span><Icon type="fund" /><span>charts</span></span>}>
                      <Menu.Item key="charts/ECharts">
                        <Icon type="line-chart" />
                        <span>ECharts</span>
                      </Menu.Item>
                      <Menu.Item key="charts/highCharts">
                        <Icon type="bar-chart" />
                        <span>highCharts</span>
                      </Menu.Item>
                      <Menu.Item key="charts/Recharts">
                        <Icon type="area-chart" />
                        <span>Recharts</span>
                      </Menu.Item>
                  </SubMenu>
                </Menu>   
                    <br />
                    <div  style={{background: this.props.app.theme == 'dark'? '#001529':'#fff'}} className={styles['switch']}>
                    <div><Icon type="bulb" />Switch Theme</div>
                    <Switch
                      style={{ width: 66}}
                      checked={this.props.app.theme === 'dark'}
                      onChange={this.changeTheme}
                      checkedChildren="Dark"
                      unCheckedChildren="Light"
                    />
                    </div>
                    
          </div>
        )
    }
}

export default connect(state=>state)(SiderBar); 