import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import User from '@/components/user';
import styles from './index.less';

const user_bread_data=[
    {type:'dashboard', context:'仪表盘',index: true, route: '/dashboard'},
    {type: 'user', context:'用户管理',index: false}
]

class Username extends React.Component{
    render(){
        return(
            <div>
                <Breadcrumb Breadcrump_data={user_bread_data}></Breadcrumb>
                <User></User>
            </div>
        )
    }
}
export default Username;