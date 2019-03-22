import React from 'react';
import { Card,Icon,Statistic } from 'antd';
import styles from './index.less';
class Message extends React.Component{
   
    render(){
        return (
        <div className={styles['message']}>
            <div className={styles['message-context']}>
                {this.props.message.map((item,index)=>{
                    return(
                        <div key={index} className={styles['message-context-eve']}>
                            <Card  bordered={false}>
                                <div className={styles["message-context-eve-con"]}>
                                    <Icon type={item.type} style={{color: item.color}}/>
                                    <Statistic title={item.title} value={item.value} />
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
        )
    }
}
export default Message
