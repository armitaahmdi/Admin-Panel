import React, { useState } from 'react'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import { Layout, Row, Col, Progress, Divider, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import '@/style/view-style/progress.less'

const ButtonGroup = Button.Group

const DrawerView = () => {
    const [percent, setPercent] = useState(0)

    return (
        <Layout className='progress animated fadeIn'>
            <div>
                <WebBreadcrumb arr={['other', 'progress bar']}></WebBreadcrumb>            </div>
            <div className='base-style'>
                <h3>When to use</h3>
                <p>Displays the current progress and status of an operation to the user when the operation takes a long time to complete. </p>
            </div>
            <Row gutter={8}>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>basic</Divider>
                        <Progress percent={30} />
                        <Progress percent={50} status='active' />
                        <Progress percent={70} status='exception' />
                        <Progress percent={100} size='small' />
                        <Progress percent={50} showInfo={false} size='small' />
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>Dynamic progress bar</Divider>
                        <Progress type='circle' percent={percent} />
                        <ButtonGroup>
                            <Button
                                onClick={() => setPercent(percent => (percent < 0 ? 0 : percent - 10))}
                                icon={<MinusOutlined />}
                            />
                            <Button
                                onClick={() => setPercent(percent => (percent > 100 ? 100 : percent + 10))}
                                icon={<PlusOutlined />}
                            />
                        </ButtonGroup>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>ring</Divider>
                        <Progress type='circle' percent={75} />
                        <Progress type='circle' percent={70} status='exception' />
                        <Progress type='circle' percent={100} width={80} />
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>custom text</Divider>
                        <Progress type='circle' percent={75} format={percent => `${percent} Days`} />
                        <Progress type='circle' percent={100} format={() => 'Done'} />
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default DrawerView
