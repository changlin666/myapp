import React from 'react';
import { Table ,Card, Icon, Tag, Statistic, Row, Col ,Avatar,Button,Divider} from 'antd';
import ReactEcharts from 'echarts-for-react';
import img from '@/assets/user-background.543334fb.png';
import img_avatar from '@/assets/female-17.jpg';
import styles from './index.less';

const {Meta}=Card;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
   
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color =(tag.length > 5 ? 'rgb(100, 234, 145)' : 'rgb(246, 152, 153)');
          return <Tag key={tag} color={color}>{tag.toUpperCase()}</Tag>;
        })}
      </span>
    ),
  }];
  
const data = [
      {
    key: '1',
    name: 'Google Chrome',
    tags: ['43.30%'],
  }, {
    key: '2',
    name: 'Mozilla Firefox',
    tags: ['33.4%'],
  }, {
    key: '3',
    name: 'Apple Safari',
    tags: ['34.6%'],
  },{
    key: '4',
    name: 'Internet Explorer',
    tags: ['12.30%'],
  },{
    key: '5',
    name: 'Opera Mini',
    tags: ['3.3%'],
  },{
    key: '6',
    name: 'Chromium',
    tags: ['2.53%'],
  }];

 const  echart_data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

  var dateList = echart_data.map(function (item) {
      return item[0];
  });
  var valueList = echart_data.map(function (item) {
      return item[1];
  });
  
 var option = {
  
      // Make gradient line here
      visualMap: [{
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
      }, {
          show: false,
          type: 'continuous',
          seriesIndex: 1,
          dimension: 0,
          min: 0,
          max: dateList.length - 1
      }],
  
  
      tooltip: {
          trigger: 'axis'
      },
      xAxis: [{
          data: dateList
      }, {
          data: dateList,
          gridIndex: 1
      }],
      yAxis: [{
          splitLine: {show: false}
      }, {
          splitLine: {show: false},
          gridIndex: 1
      }],
      grid: [{
          bottom: '60%'
      }, {
          top: '60%'
      }],
      series: [{
          type: 'line',
          showSymbol: false,
          data: valueList
      }, {
          type: 'line',
          showSymbol: false,
          data: valueList,
          xAxisIndex: 1,
          yAxisIndex: 1
      }]
  };
class Use extends React.Component{
    render(){
        return(
            <div className={styles['use']}>
                <div className={styles['use-table']}>
                    <Card>
                        <Table pagination={false} columns={columns} dataSource={data} showHeader={false} />
                    </Card>
                </div>
                <div className={styles['use-middle']}>
                    <Card>
                        <div className="top">
                        <Row gutter={24}>
                            <Col span={8} style={{ borderRight: '1px solid #eee'}}>
                            <Statistic title="usage" value={'99GB'}/>
                            </Col>
                            <Col span={8} style={{ borderRight: '1px solid #eee'}}>
                            <Statistic title="space" value={'825GB'}  />
                            </Col>
                            <Col span={8}>
                            <Statistic title="cpu" value={'61%'} />
                            </Col>
                        </Row>
                        </div>
                        <div className="chart">
                          <ReactEcharts option={option}></ReactEcharts>
                        </div>
                    </Card>
                </div>
                <div className={styles['use-right']}>
                    <Card
                    style={{position: 'relative'}}
                    cover={<img alt="example" src={img} style={{height:200}}/>}
                >
                    <Meta
                    avatar={<Avatar src={img_avatar}/>}
                    title="admin"
                    />
                     <Row gutter={24} style={{ borderBottom: '1px solid #eee'}}>
                      <Col span={12} style={{ borderRight: '1px solid #eee'}}>
                        <Statistic title="EARNING SALES" value={`$3,241`} style={{color : 'rgb(100, 234, 145)'}} />
                      </Col>
                      <Col span={12}>
                        <Statistic title="ITEM SOLD" value={`3,556`} style={{color : 'rgb(143, 201, 251)'}}/>
                      </Col>
                    </Row>
                    <div className={styles['use-right-button']}><Button type="primary" ghost>View Prifile</Button></div>
                </Card>
                </div>
            </div>
        )
    }
}
export default Use