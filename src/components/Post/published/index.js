import React from 'react';
import {Table ,Tooltip } from 'antd';
import styles from './index.less';


const textOverflow = {
    width: "400px",
    overflow:"hidden",
      textOverflow:"ellipsis",
    whiteSpace:"nowrap"
  }

const published_columns = [
    {
    title: '图像',
    dataIndex: 'img',
    render: (text)=>{
        return(
            <Tooltip title={text}>
               <div style={textOverflow}>{text}</div>
            </Tooltip>
        )
    },
    },
    {
    title: '标题',
    dataIndex: 'title',
    render: (text)=>{
        return(
            <Tooltip title={text}>
               <div style={textOverflow}>{text}</div>
            </Tooltip>
        )
    },
  }, {
    title: '作者',
    dataIndex: 'author',
    width: "400",
  }, {
    title: '类别',
    dataIndex: 'category',
  },{
    title: '标签',
    dataIndex: 'label',
    },{
    title: '可见性',
    dataIndex: 'visibility',
  }, {
    title: '评论数',
    dataIndex: 'comment',
    width: 400,
  }, {
    title: '浏览数',
    dataIndex: 'browse',
    width: 400,
  }, {
    title: '发布日期',
    dataIndex: 'data',
    width: 400,
  }];

class Published extends React.Component{
    
    render(){
        return(
            <div  className={styles['published']}>
                <Table 
                columns={published_columns}
                 dataSource={this.props.published_data} 
                 scroll={{ x: 1000}} 
                 bordered={true}  
                 pagination={ this.props.page }/>
            </div>
        )
    }
}

export default Published;
