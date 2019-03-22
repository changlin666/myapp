import React from 'react';
import { Breadcrumb} from 'antd';

import router from 'umi/router';


class BreadCrumb extends React.Component {
        goTo=(key)=>{
          router.push(key);
        };
        ongoTo=()=>{
          return 1;
        }
    render(){
        return(
            <Breadcrumb>
            {
                this.props.Breadcrump_data.map((item,index)=>{
                  return(
                    <Breadcrumb.Item onClick={item.index ?()=>{this.goTo(item.route)} :()=>{this.ongoTo()}}>{item.context}</Breadcrumb.Item>
                  )
                })
            }
          </Breadcrumb>
        )
    }
}

export default BreadCrumb;
