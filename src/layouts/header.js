import React from 'react';
import {connect} from 'dva';
import {Layout,Icon} from 'antd';
import styles from './header.less';
const { Header } = Layout;

class HeaderBar extends React.Component{
      toggle = () => {
          this.props.dispatch({
              type: 'app/toggle',
              collapsed: !this.props.app.collapsed,
          })
      };
    render(){
        return(
            <React.Fragment>
                <Header style={{ background: '#fff', padding: 0 }} className={styles['header']}>
                    <Icon
                    className={styles['header-trigger']}
                    type={this.props.app.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    />
                </Header>
            </React.Fragment>  
                )
    }
}
export default connect(state=>state)(HeaderBar);