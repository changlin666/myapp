import React from 'react';
import PostBreadcrumb from '@/components/Breadcrumb';
import Published from '@/components/Post/published';
import UnPublished from '@/components/Post/UnPublished';
import img1 from '@/assets/757575 j(1).png';
import img2 from '@/assets/757575 j(2).png';
import img3 from '@/assets/757575j.png';
import img4 from '@/assets/757575 l(1).png';
import img5 from '@/assets/757575l.png';
import img6 from '@/assets/757575 p(1).png';
import img7 from '@/assets/757575 p(2).png';
import img8 from '@/assets/757575p.png';
import img9 from '@/assets/757575 t(1).png';
import img10 from '@/assets/757575 t(2).png';
import img11 from '@/assets/757575 t(3).png';
import img12 from '@/assets/757575t.png';
import img13 from '@/assets/757575b.png';
import img14 from '@/assets/757575c.png';
import img15 from '@/assets/757575g.png';
import img16 from '@/assets/757575h.png';
import img17 from '@/assets/757575m.png';
import { Tabs, Tooltip } from 'antd';
import styles from './index.less';

const TabPane = Tabs.TabPane;

// 面包屑数据
const postBread_data=[
    {type:'dashboard', context:'仪表盘',index: true, route: '/user'},
    {type: 'user', context:'用户管理',index: false}
]

const textOverflow = {
  overflow:"hidden",
    textOverflow:"ellipsis",
  whiteSpace:"nowrap"
}
// columns
const published_columns = [
    {
    title: '图像',
    dataIndex: 'img',
    render:text => <img src={text} alt="" style={{width: 40}}/>
    },{
    title: '标题',
    dataIndex: 'title',
    width: 200,
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
  }, {
    title: '浏览数',
    dataIndex: 'browse',
  }, {
    title: '发布日期',
    dataIndex: 'data',
    width: 400,
  }];

  // 已公布部分数据
const published_data = [{
    key: '1',
    img: img17,
    title: 'Tuwxojmgh Gaeksykeqq Dzjvgu Cpxlvgdh Aceed Lmrsn Efoh',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '2',
    img: img16,
    title: 'Ofhvci Jmxapb Ips Uogumpvnhi Xszzn Rpojkp',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '3',
    img: img15,
    title: 'Uskftu Hpnyplznt Npkb Yiuqrfllv Srmkbg Iclou',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '4',
    img: img14,
    title: 'Vqonod Isey Obv Jbxa',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '5',
    img: img13,
    title: 'Ssaufkq Oiliwucjz Cxodl Wjxvjheld',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '6',
    img: img12,
    title: 'Eerxo Vhmefi Iglurvti Zsdaeh Otgqxnsap Bnanvmilc Ryqzelx',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '7',
    img: img11,
    title: 'Gydruv Jbojg Ephlhsds Jzgrnshb Obqxoy Jvgwkksl Ljheho',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '8',
    img: img10,
    title: 'Qgbshek Qhkltgj Vbdpgfbv Ssdwtxkqmo Wmkyckeh Gtvrkktwj Slpw',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '9',
    img: img9,
    title: 'Idyxy Qqbvyv Fvvt Qslqalqh Znpoooj Lzxqxccwet',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '10',
    img: img8,
    title: 'Jdkthwj Gzskqssgv Moqvojhrtg Rlukce',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '11',
    img: img7,
    title: 'Ducxlcba Jfak Ewgyy Iwi',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '12',
    img: img6,
    title: 'Fbkhne Nwmhm Yolws Mpfwgqlf Vdcqxs Npcytr',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '13',
    img: img5,
    title: 'Elrzo Lto Wctzmxgqk Vcwnn Popcelc',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '14',
    img: img4,
    title: 'Uhcbpmlhh Rcttl Xlnsrpnph',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '15',
    img: img3,
    title: 'Xmcftes Jyvdqpkfpx Yxpobhmn Blgui Sycjnn Mbfsy Kfibebs',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '16',
    img: img2,
    title: 'Cmloqecxgu Qqnlqni Yfamcl Ksjwrgub Eghwbme',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '17',
    img: img1,
    title: 'Jgnizloltr Joertgmg Mahif Krblxdmym Vbwu',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '18',
    img: img1,
    title: 'Ryfy Hixpwuxvzq Hezxpvixak',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '19',
    img: img2,
    title: 'Flckwengj Lkqlnxy Edgnmd Giumgpqo Bopiq Hocufpjx Jvzhwxxi',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }];
  // 未公布数据
  const un_published_data = [{
    key: '1',
    img: img1,
    title: 'Tuwxojmgh Gaeksykeqq Dzjvgu Cpxlvgdh Aceed Lmrsn Efoh',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '2',
    img: img2,
    title: 'Ofhvci Jmxapb Ips Uogumpvnhi Xszzn Rpojkp',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '3',
    img: img3,
    title: 'Uskftu Hpnyplznt Npkb Yiuqrfllv Srmkbg Iclou',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '4',
    img: img4,
    title: 'Vqonod Isey Obv Jbxa',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '5',
    img: img5,
    title: 'Ssaufkq Oiliwucjz Cxodl Wjxvjheld',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '6',
    img: img6,
    title: 'Eerxo Vhmefi Iglurvti Zsdaeh Otgqxnsap Bnanvmilc Ryqzelx',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '7',
    img: img7,
    title: 'Gydruv Jbojg Ephlhsds Jzgrnshb Obqxoy Jvgwkksl Ljheho',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '8',
    img: img8,
    title: 'Qgbshek Qhkltgj Vbdpgfbv Ssdwtxkqmo Wmkyckeh Gtvrkktwj Slpw',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '9',
    img: img9,
    title: 'Idyxy Qqbvyv Fvvt Qslqalqh Znpoooj Lzxqxccwet',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '10',
    img: img10,
    title: 'Jdkthwj Gzskqssgv Moqvojhrtg Rlukce',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '11',
    img: img11,
    title: 'Ducxlcba Jfak Ewgyy Iwi',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '12',
    img: img12,
    title: 'Fbkhne Nwmhm Yolws Mpfwgqlf Vdcqxs Npcytr',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '13',
    img: img13,
    title: 'Elrzo Lto Wctzmxgqk Vcwnn Popcelc',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '14',
    img: img14,
    title: 'Uhcbpmlhh Rcttl Xlnsrpnph',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '15',
    img: img15,
    title: 'Xmcftes Jyvdqpkfpx Yxpobhmn Blgui Sycjnn Mbfsy Kfibebs',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '16',
    img: img16,
    title: 'Cmloqecxgu Qqnlqni Yfamcl Ksjwrgub Eghwbme',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  },, {
    key: '17',
    img: img17,
    title: 'Jgnizloltr Joertgmg Mahif Krblxdmym Vbwu',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '18',
    img: img1,
    title: 'Ryfy Hixpwuxvzq Hezxpvixak',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }, {
    key: '19',
    img: img2,
    title: 'Flckwengj Lkqlnxy Edgnmd Giumgpqo Bopiq Hocufpjx Jvzhwxxi',
    author: 'Brown',
    category: 'ukcusp',
    label: 'kgesxqy',
    visibility: 'Private',
    comment: '108',
    browse: '154',
    data: '2010-12-16 15:59:30',
  }];

  // 已公布部分数据分页信息
const page={
    showSizeChanger: true,
    onShowSizeChange: onShowSizeChange,
    showTotal: showTotal,
    total: 19,
    showQuickJumper: true
}
function onShowSizeChange(current, pageSize){
    console.log(current, pageSize);
  }
function showTotal(total){
    return `总共 ${total} 条记录`;
}


class Post extends React.Component{
    linkTo=(key)=>{
        this.props.history.push(key);
    };
    render(){
        return(
            <div className={styles['post']}>
                  {/* 面包屑 */}
                <PostBreadcrumb Breadcrump_data={postBread_data} linkTo={this.linkTo} props={this.props}></PostBreadcrumb>
                 {/* 主内容部分 */}
                 <Tabs defaultActiveKey="1">
                    {/* 已发布信息 */}
                    <TabPane tab="已发布" key="1">
                        <Published published_columns={published_columns} published_data={published_data} page={page}></Published>
                    </TabPane>
                    {/* 未发布信息 */}
                    <TabPane tab="未发布" key="2">
                        <UnPublished published_columns={published_columns} un_published_data={un_published_data} page={page}></UnPublished>
                    </TabPane>
                </Tabs>  
            </div>
        )
    }
}
export default Post;