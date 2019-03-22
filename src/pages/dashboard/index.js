import React from 'react';
import {connect} from 'dva'
import BreadCrumb from '@/components/Breadcrumb';
import Message from '@/components/DashBoard/message/index';
import Line from '@/components/DashBoard/line/index';
import TabComment from '@/components/DashBoard/tabComment/index';
import Team from '@/components/DashBoard/team/index';
import Use from '@/components/DashBoard/use/index';

import styles from './index.less';

// 面包屑数据
const Dashboard_bread=[{
    type: 'dashboard',
    context: '仪表盘',
    index: false
}]
// 信息数据
const message=[
{
    type:'pay-circle',
    title:'Active Users',
    value:'112893',
    color:'rgb(100, 234, 145)'
},
{
    type:'team',
    title:'Active Users',
    value:'112893',
    color: 'rgb(143, 201, 251)'
},
{
    type:'message',
    title:'Active Users',
    value:'112893',
    color: 'rgb(216, 151, 235)'
},
{
    type:'shopping-cart',
    title:'Active Users',
    value:'112893',
    color:'rgb(246, 152, 153)'
},]
// 折线图echart数据
const line_option = {
    title: {
        text: '对数轴示例',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: 'left',
        data: ['2的指数', '3的指数']
    },
    xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y'
    },
    series: [
        {
            name: '3的指数',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
        },
        {
            name: '2的指数',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
        },
        {
            name: '1/2的指数',
            type: 'line',
            data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
        }
    ]
};
// 表格数据

  class DashBoard extends React.Component{
    state={
        message: [
            {
                type:'pay-circle',
                title:'Active Users',
                value: this.props.app.value,
                color:'rgb(100, 234, 145)'
            },
            {
                type:'team',
                title:'Active Users',
                value: this.props.app.value,
                color: 'rgb(143, 201, 251)'
            },
            {
                type:'message',
                title:'Active Users',
                value: this.props.app.value,
                color: 'rgb(216, 151, 235)'
            },
            {
                type:'shopping-cart',
                title:'Active Users',
                value: this.props.app.value,
                color:'rgb(246, 152, 153)'
            },],
            value: 12
    }
    addValue=(value)=>{
        var num=0
      /*   var t = setInterval(()=>{
            num=num++;
            this.props.dispatch({
                type:'app/addValue',
                value: num,
            });
            console.log(num)
           
            if(num==value){
                clearInterval(t);
                 }   
            return num    
         },100); */
    }
    render(){
        return(
            <React.Fragment>
                {/* 面包屑 */}
               <div className={styles["bread"]}>
                    <BreadCrumb Breadcrump_data={Dashboard_bread}></BreadCrumb>
               </div>
                {/* 信息部分 */}
               <div className={styles["message"]} style={{ background: '#ECECEC', marginTop: 20 }}>
                    <Message message={this.state.message} onClick={this. addValue(this.value)}></Message>
               </div>
               {/* 折线图 */}
               <div className={styles["line"]}>
                    <Line line_option={line_option}></Line>
               </div>
               {/* 表格和评论 */} 
               <div className={styles["tab"]}>
                    <TabComment></TabComment>
                </div>
                {/* team图表 */}
               <div className={styles["team"]}>
                    <Team></Team>
               </div>
               {/* 用量图表 */}
               <div className={styles["use"]}>
                    <Use></Use>
               </div>
            </React.Fragment>
            )
        }
    }
                
export default connect(state=>state)(DashBoard) ;