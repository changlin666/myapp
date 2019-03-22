import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import {Card} from 'antd';
import styles from './index.less';

// 面包屑
const editor_bread_data=[
    {type:'dashboard', context:'仪表盘',index: true, route: '/dashboard'},
    {type: 'camera', context:'UI Element',index: false},
    {type: 'edit', context:'Editor',index: false},
]
class Editor extends React.Component{
    render(){
        return(
            <div className={styles['editor']}>
               {/* 面包屑 */}
                <Breadcrumb Breadcrump_data={editor_bread_data}></Breadcrumb>
                <div className={styles['editor-context']}>
                    <Card title="Editor" bordered={false}>
                        <div className={styles['editor-context-editor']}></div>
                    </Card>
                    <Card title="HTML" bordered={false}>
                        <div className={styles['editor-context-html']}><div></div></div>
                    </Card>
                    <Card title="Markdown" bordered={false}>
                        <div className={styles['editor-context-markdown']}><div></div></div>
                    </Card>
                    <Card title="JSON" bordered={false}>
                        <div className={styles['editor-context-json']}><div></div></div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Editor;