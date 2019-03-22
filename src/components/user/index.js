import React from 'react';
import { Input,Select,DatePicker,Button,Card ,Cascader,Table,Avatar,Menu ,Icon,Dropdown,Modal} from 'antd';
import Moform from './modal';
import img1 from '@/assets/pexels-photo-415829.jpeg';
import img2 from '@/assets/43.jpg';
import img3 from '@/assets/44.jpg';
import img4 from '@/assets/45.jpg';
import img5 from '@/assets/65.jpg';
import img6 from '@/assets/68.jpg';
import styles from './index.less';

const Search = Input.Search;
const Option = Select.Option;
// 城市数据
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }];
// 日期
const { RangePicker } = DatePicker;
// 分页数据
const page={
    showSizeChanger: true,
    onShowSizeChange: onShowSizeChange,
    showTotal: showTotal,
    total: 30,
    showQuickJumper: true
}
function onShowSizeChange(current, pageSize){
    console.log(current, pageSize);
  }
function showTotal(total){
    return `总共 ${total} 条记录`;
}
// 表格columns
const menu=(<Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">更新</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">删除</a>
                </Menu.Item>
            </Menu>)
const columns = [
    {
      title: '头像', width: 100, dataIndex: 'img', key: 'name', fixed: 'left',
       render:text =><Avatar src={text} style={{width: 50, height: 50}}/>
    },
    { title: '名字', dataIndex: 'name', key: '1' },
    { title: '昵称', dataIndex: 'ai', key: '2' },
    { title: '年龄', dataIndex: 'age', key: '3' },
    { title: '性别', dataIndex: 'sex', key: '4' },
    { title: '电话', dataIndex: 'number', key: '5' },
    { title: '电子邮件', dataIndex: "email", key: '6' },
    { title: '地址', dataIndex: 'address', key: '7' },
    { title: '创建时间', dataIndex: 'time', key: '8' },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () =>  <Dropdown overlay={menu}>
         <Icon type="menu-fold" />
    </Dropdown> 
    },
  ];

// 表格数据
const img_data=[img1,img2,img3,img4,img5,img6,img1,img2,img3,img4,img5,img6,
            img1,img2,img3,img4,img5,img6,img1,img2,img3,img4,img5,img6,
            img1,img2,img3,img4,img5,img6];
const data=[];
for( var i=0; i<30; i++){
    data[i]={};
    data[i].img=img_data[i];
    data[i].key=i+1;
    data[i].ai='Lopez';
    data[i].name='Michael Lewis';
    data[i].age='32';
    data[i].sex='男';
    data[i].number='14685211133';
    data[i].address='宁夏回族自治区 吴忠市 盐池县';
    data[i].email='q.kunhogwc@lqtdridfub.ai';
    data[i].time='1971-03-19 21:22:01';
}

  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
class User extends React.Component{
      state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
      }
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      }
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      }
    
    render(){
        const { visible, confirmLoading } = this.state;
        return(
            <div className={styles['user']}>
                <Card>
                    <div className={styles['user-select']}>
                        <div className={styles['user-select-left']}>
                            <div className={styles['user-select-left-name']}>
                                <Search
                                placeholder="搜索名字"
                                onSearch={value => console.log(value)}
                                style={{ width: 100 }}
                                />
                            </div>
                            <div className={styles['user-select-left-city']}>
                                <Cascader
                                 options={options} 
                                 placeholder="选择地址" 
                                 style={{ width: 100 }}/>
                            </div>
                            <div className={styles['user-select-left-time']}>
                                <RangePicker/>                      
                            </div>
                            <div className={styles['user-select-left-btn']}>
                                <Button type="primary">搜索</Button>
                                <Button>重置</Button>
                            </div>
                        </div>
                        <div className={styles['user-select-right']}>
                            <Button onClick={this.showModal}>创建</Button>
                            <Moform 
                                  title='title' 
                                  visible={visible}>
                                  onOk={this.handleOk}
                                  confirmLoading={confirmLoading}
                                  onCancel={this.handleCancel}
                            </Moform>
                        </div>
                    </div>
                    <div className={styles['user-table']}>
                     <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 1300 }} bordered pagination={page}/>
                    </div>
                </Card>     
            </div>
        )
      }
    }
  
export default User;