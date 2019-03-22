import React from 'react';
import { Table, Card, Comment, List ,Divider, Tag, Tooltip, } from 'antd';
import moment from 'moment';
import comment_dataH from '@/assets/75757h.png';
import comment_dataT from '@/assets/75757t.png';
import comment_dataW from '@/assets/75757w.png';
import styles from './index.less';

const table_columns = [
    {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'STATUS',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          var color=(tag.length > 5 ? 'rgb(100, 234, 145)' : 'rgb(246, 152, 153)');
          return <Tag key={tag} color={color}>{tag.toUpperCase()}</Tag>;
        })}
      </span>
    ),
  }, {
    title: 'DATE',
    dataIndex: 'data',
    key: 'data',
  }, {
    title: 'PRICE',
    dataIndex: 'price',
    key: 'price', 
    render: text => {
       return <span style={{color: 'rgb(246, 152, 153)'}}>{text}</span>
    }
  }];
const table_data = [
    {
    key: '1',
    name: 'Anderson',
    tags: ['TAX'],
    data: '2015-07-29',
    price: '$31.15',
  }, {
    key: '2',
    name: 'Hall',
    tags: ['TAX'],
    data: '2016-08-23',
    price: '$133.27',
  }, {
    key: '3',
    name: 'Johnson',
    tags: ['REJECT'],
    data: '2016-01-12',
    price: '$132.1',
  },{
    key: '4',
    name: 'Lewis',
    tags: ['SALE'],
    data: '2015-10-27',
    price: '$27.7',
  },{
    key: '5',
    name: 'Thompson',
    tags: ['TAX'],
    data: '2015-11-20',
    price: '$11.17',
  } ];
// 评论数据
const comment_data = [
    {
        actions: [<Tag color={'rgb(248, 200, 46)'}>PENDING</Tag>,<span>2016-12-08 12:06:40</span>],
        author: 'Thompson',
        avatar: comment_dataH,
        content: (
          <p>Xrih bcg tprjgj ikoeiabw leuzrb jefihqeu rhndxpu xsku elbofsxb epawguif ora ivmuoopve qwdiu jxjtwf jvfz ddodlwnfb.</p>
        )
      },
      {
        actions: [<Tag color={'rgb(143, 201, 251)'}>APPROVED</Tag>,<span>2016-12-08 12:06:40</span>],
        author: 'Martinez',
        avatar: comment_dataW,
        content: (
          <p>Vtwjsvt cutmvbkw pwagpgrju cetdlj psnsedc jrzi evoc upjfdlvo tfrswv ghrysfe seefe lvqftql lwkxva koovimxyp rkynpqeok qfuqewvs gelmyikx.</p>
        ),
      },
      {
        actions: [<Tag  color={'rgb(143, 201, 251)'}>APPROVED</Tag>,<span>2016-12-08 12:06:40</span>],
        author: 'Walker',
        avatar: comment_dataT,
        content: (
          <p>Bnxq xlpul eyxqwn mgzikpv qflsqsvy rrh ktxn pjcgjty netjyvs uslvfdcru xcihxwuq gkqgxytl vlvvz.</p>
        ),
      },
  ];
class TabComment extends React.Component{
    render(){
        return (
            <div className={styles['tab']}>
                <div className={styles['tab-table']}>
                  <Card style={{border: 'none', paddingTop: 30 }}>
                    <Table  pagination={false} columns={table_columns} dataSource={table_data} />
                  </Card>
                </div>
                <div className={styles['tab-comment']}>
                    <Card>
                        <List
                            className="comment-list"
                            itemLayout="horizontal"
                            dataSource={comment_data}
                            renderItem={item => (
                            <Comment
                                actions={item.actions}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime} />                         
                            )}
                        />
                    </Card>
                </div>
            </div>
        )
    }
}

export default TabComment;
