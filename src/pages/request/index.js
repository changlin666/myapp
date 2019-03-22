import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import {Card, Tag, Table,Select,Input ,Button } from 'antd';
import styles from './index.less';

const Option = Select.Option;
const Search = Input.Search;

const bread_data=[
    {type:'dashboard', context:'仪表盘',index: true, route: '/dashboard'},
    {type: 'api', context:'Request',index: false},
]
const columns = [
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
                let color='';
              if(tag==='get'){color='green'}
              else if(tag==='post'){color='orange'}
              else if(tag==='DELETE'){color='red'}
              return <Tag key={tag} color={color}>{tag.toUpperCase()}</Tag>;
            })}
          </span>
        ),
      },
    {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }];
  
const data = [
      {
    key: '1',
    name: '/api/v1/routes',
    tags: ['get'],
  }, {
    key: '2',
    name: '/api/v1/user',
    tags: ['get'],
  }, {
    key: '3',
    name: '/api/v1/user/logout',
    tags: ['get'],
  },{
    key: '4',
    name: '/api/v1/user/login',
    tags: ['post'],
  },{
    key: '5',
    name: '/api/v1/user/:id',
    tags: ['get'],
  },{
    key: '6',
    name: '/api/v1/users',
    tags: ['get'],
  },{
    key: '7',
    name: '/api/v1/user/:id',
    tags: ['Patch'],
  },{
    key: '8',
    name: '/api/v1/user',
    tags: ['post'],
  },{
    key: '9',
    name: '/api/v1/user/:id',
    tags: ['DELETE'],
  },{
    key: '10',
    name: '/api/v1/users/delete',
    tags: ['post'],
  },{
    key: '11',
    name: '/api/v1/posts',
    tags: ['get'],
  },{
    key: '12',
    name: '/api/v1/dashboard',
    tags: ['get'],
  }];
class Request extends React.Component{
   
    state={
      value:'/api/v1/routes',
      serValue:'POST'
    }
    getValue = (val1,val2) => {
      this.setState({
        value:val1,
        serValue:val2
      })
    }
    render(){
        return(
            <div className={styles['request']}>
                <Breadcrumb Breadcrump_data={bread_data}></Breadcrumb>
                <div className={styles['request-context']}>
                    <div className={styles['request-context-left']}>
                        <Card>
                            <Table pagination={false} columns={columns} dataSource={data} showHeader={false} 
                             onRow={(record) => {
                              return {onClick: (event) => {
                                this.getValue(record.name,record.tags[0].toUpperCase()) 
                              }}
                              
                                }      // 点击行
                              
                            }
                            />
                        </Card>
                    </div>
                    <div className={styles['request-context-right']}>
                        <div className={styles['request-context-right-top']}>
                            <div className={styles["request-context-right-top-select"]}  style={{ width: '15%' }}>
                                  <Select 
                                      showSearch
                                      value={this.state.serValue}
                                      optionFilterProp="children"
                                      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
                                      <Option value="post">POST</Option>
                                      <Option value="get">GET</Option>
                                      <Option value="put">PUT</Option>
                                      <Option value="delete">DELETE</Option>
                                      <Option value="patch">PATCH</Option>
                                    </Select>
                            </div>
                            <div className={styles["request-context-right-top-input"]}  style={{ width: '60%' }}>
                                <Search
                                    value={this.state.value}
                                    enterButton="参数"
                                    onSearch={value => console.log(value)}
                                  />    
                            </div>
                            <div className={styles["request-context-right-top-send"]}>
                              <Button type="primary">发送</Button>
                            </div>
                        </div>
                        <div className={styles['request-context-right-param']}></div>
                        <div className={styles['request-context-right-context']}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Request;