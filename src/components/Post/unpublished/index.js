import React from 'react';
import { Table} from 'antd';
import styles from './index.less';


class UnPublished extends React.Component{
    render(){
        return(
            <div className={styles['unPublished']}>
                <Table
                 columns={this.props.published_columns} 
                 dataSource={this.props.un_published_data} 
                 pagination={ this.props.page }
                 scroll={{ x: 1000}} 
                 bordered={true} />
            </div>
        )
    }
}

export default UnPublished;