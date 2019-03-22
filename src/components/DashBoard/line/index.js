import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Card } from 'antd';
import Img from '../../../assets/4.png';
import styles from './index.less';

export default class Line extends Component {
  render() {
    return (
      <div  className={styles['line']}>
        <ReactEcharts option={this.props.line_option} className={styles['line-left']} style={{height: 400}}></ReactEcharts>
        <div className={styles["line-right"]}>
          <Card className={styles["line-right-weather"]}>
              <div className={styles['line-right-weather-left']}>
                  <img src={Img} alt=""/>
                  <p>多云</p>
              </div>
              <div className={styles['line-right-weather-right']}>
                  <h2>26°</h2>
                  <p>深圳</p>
              </div>
          </Card>
          <Card className={styles["line-right-intorduce"]}>
              <div className={styles['line-right-intorduce-text']}>
                  I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.
                  But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
              </div>
          </Card>
        </div>
      </div>
    )
  }
}
