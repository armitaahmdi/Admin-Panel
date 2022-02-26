import React, { useState } from 'react'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import { Layout, Divider, Row, Col, Tabs, Select, Radio, Button } from 'antd'
import { AndroidOutlined } from '@ant-design/icons'

const { TabPane } = Tabs
const { Option } = Select

function callback(key) {
    console.log(key)
}

const panesArr = [
    { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' }
]

const TabsViews = () => {
    const [panes, setPanes] = useState(panesArr)
    const [activeKey, setActiveKye] = useState(panesArr[0].key)
    const [tabPosition, setTabPosition] = useState('top')
    const [size, setSize] = useState('small')

    const add = () => {
        setActiveKye(activeKey + 1)
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: `newTab${activeKey}` })
        setPanes(panes)
    }
    let remove = targetKey => {
        let lastIndex
        panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1
            }
        })
        const newPanes = panes.filter(pane => pane.key !== targetKey)
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                setActiveKye(panes[lastIndex].key)
            } else {
                setActiveKye(panes[0].key)
            }
        }
        setPanes(newPanes)
        setActiveKye(activeKey)
    }

    const onEdit = (targetKey, action) => {
        action === 'remove' ? remove(targetKey) : add(targetKey)
    }

    return (
        <Layout className='animated fadeIn'>
            <div>
                <WebBreadcrumb arr={['display', 'tab']}></WebBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>When to use</h3>
                <Divider />
                <p>Provide a level area to store and display large pieces of content and keep the interface clean</p>
                <p>Ant Design provides three levels of tabs in turn for different scenarios</p>
                <p>- Card-style tab, providing a closeable style, often used at the top of the container. </p>
                <p>- Standard line tab, used for main function switching inside the container, this is the most commonly used Tabs. </p>
                <p>- RadioButton can be used as a lower level tab. </p>
            </div>
            <Row gutter={8}>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>Basic</Divider>
                        <Tabs defaultActiveKey='1' onChange={callback}>
                            <TabPane tab='Tab 1' key='1'>
                                Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab='Tab 2' key='2' disabled>
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab='Tab 3' key='3'>
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>Control size</Divider>
                        <div>
                            <Radio.Group
                                value={size}
                                onChange={e => setSize(e.target.value)}
                                style={{ marginBottom: 16 }}>
                                <Radio.Button value='small'>Small</Radio.Button>
                                <Radio.Button value='default'>Default</Radio.Button>
                                <Radio.Button value='large'>Large</Radio.Button>
                            </Radio.Group>
                            <Tabs defaultActiveKey='1' size={size}>
                                <TabPane tab='Tab 1' key='1'>
                                    Content of tab 1
                                </TabPane>
                                <TabPane tab='Tab 2' key='2'>
                                    Content of tab 2
                                </TabPane>
                                <TabPane tab='Tab 3' key='3'>
                                    Content of tab 3
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>Control display position</Divider>
                        <div>
                            <div style={{ marginBottom: 16 }}>
                                Tab position:
                                <Select
                                    value={tabPosition}
                                    onChange={tabPosition => setTabPosition(tabPosition)}
                                    dropdownMatchSelectWidth={false}>
                                    <Option value='top'>top</Option>
                                    <Option value='bottom'>bottom</Option>
                                    <Option value='left'>left</Option>
                                    <Option value='right'>right</Option>
                                </Select>
                            </div>
                            <Tabs tabPosition={tabPosition}>
                                <TabPane tab='Tab 1' key='1'>
                                    Content of Tab 1
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <AndroidOutlined />
                                            Tab 2
                                        </span>
                                    }
                                    key='2'>
                                    Content of Tab 2
                                </TabPane>
                                <TabPane tab='Tab 3' key='3'>
                                    Content of Tab 3
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>Add and delete</Divider>
                        <div>
                            <div style={{ marginBottom: 16 }}>
                                <Button onClick={add}>ADD</Button>
                            </div>
                            <Tabs
                                hideAdd
                                onChange={activeKey => setActiveKye(activeKey)}
                                activeKey={activeKey}
                                type='editable-card'
                                onEdit={onEdit}>
                                {panes.map(pane => (
                                    <TabPane tab={pane.title} key={pane.key}>
                                        {pane.content}
                                    </TabPane>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default TabsViews
