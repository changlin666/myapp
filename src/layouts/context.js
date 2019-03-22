import React from 'react';
// import {connect} from 'dva';
import styles from './context.less';

class Context extends React.Component{
    render(){
        return (
           <div className={styles['context']}>
                {this.props.children}
           </div>
        )
    }
}

export default Context