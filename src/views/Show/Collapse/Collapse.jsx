import React from 'react'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import { Layout, Divider, Row, Col, Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function callback(key) {
    console.log(key)
}

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden'
}

const CollapseView = () => {
    return (
        <Layout className='animated fadeIn'>
            <div>
                <WebBreadcrumb arr={['Display', 'Collapse']}></WebBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>When to use</h3>
                <Divider />
                <p>Group and hide complex areas to keep pages clean. </p>
                <p>An accordion is a special type of accordion that only allows a single content area to expand. </p>
            </div>
            <Row>
                <Col span={24}>
                    <div className='base-style'>
                        <Divider orientation='left'>Easy to use</Divider>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                            <Panel header='This is panel header 1' key='1'>
                                <p>{text}</p>
                            </Panel>
                            <Panel header='This is panel header 2' key='2'>
                                <p>{text}</p>
                            </Panel>
                            <Panel header='This is panel header 3' key='3' disabled>
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                        ,
                    </div>
                </Col>
                <Col span={24}>
                    <div className='base-style'>
                        <Divider orientation='left'>Accordion</Divider>
                        <Collapse accordion>
                            <Panel header='This is panel header 1' key='1'>
                                <p>{text}</p>
                            </Panel>
                            <Panel header='This is panel header 2' key='2'>
                                <p>{text}</p>
                            </Panel>
                            <Panel header='This is panel header 3' key='3'>
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
                <Col span={24}>
                    <div className='base-style'>
                        <Divider orientation='left'>Custom style function</Divider>
                        <Collapse
                            onChange={callback}
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                            <Panel header='This is panel header 1' key='1' style={customPanelStyle}>
                                <Collapse defaultActiveKey='1'>
                                    <Panel header='This is panel nest panel' key='1'>
                                        <p>{text}</p>
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel header='This is panel header 2' key='2' style={customPanelStyle}>
                                <p>{text}</p>
                            </Panel>
                            <Panel header='This is panel header 3' key='3' style={customPanelStyle}>
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default CollapseView