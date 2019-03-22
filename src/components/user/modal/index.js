import React from 'react';
import {Modal} from 'antd';

class Moform extends React.Component{
    render(){
        return(
            <Modal
            title={this.props.title}
            visible={this.props.visible}
            onOk={this.props.handleOk}
            confirmLoading={this.props.confirmLoading}
            onCancel={this.props.handleCancel}
            >
            <p>ppp</p>
        </Modal>
        )
    }
}

export default Moform;