import React from 'react'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import { Layout, Divider, Row, Col } from 'antd'

//custom component
import BaseTree from './components/BaseTree'
import SearchTree from './components/SearchTree'
import ControlledTree from './components/ControlledTree'
import DraggableTree from './components/DraggableTree'

/**
 * TreeView
 */
const TreeView = () => {
    return (
        <Layout className='animated fadeIn'>
            <div>
                <WebBreadcrumb arr={['display', 'tree control']}></WebBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>When to use</h3>
                <Divider />
                <p>
                    Folders, organizational structures, biological classifications, countries and regions, etc., most of the structures of everything in the world are tree structures. Using the tree control can fully display the hierarchical relationship, and has interactive functions such as expanding and collapsing selection.
                </p>
            </div>
            <Row gutter={8}>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>Basic usage</Divider>
                        <BaseTree />
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>Searchable</Divider>
                        <SearchTree />
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>Controlled Control</Divider>
                        <ControlledTree />
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>Dragable</Divider>
                        <DraggableTree />
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default TreeView