import React, { useState } from 'react'
import { Layout, Row, Col, Button, Tabs } from 'antd'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import '@/style/view-style/animation.less'

const { TabPane } = Tabs
const typeIn = [
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'fadeIn',
    'fadeInDown',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'flipInX',
    'flipInY',
    'rotateIn'
]
const typeOut = [
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
    'fadeInDown',
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'rotateOut'
]
const typeOther = [
    'bounceIn',
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello'
]

const AnimationView = () => {
    const [fontType, setFontType] = useState('animated bounceInRight')
    return (
        <Layout className='animated fadeIn'>
            <div>
                <WebBreadcrumb arr={['other', 'animation']}></WebBreadcrumb>
            </div>
            <Row gutter={8} style={{ marginTop: '3rem' }}>
                <Col span={10}>
                    <Tabs type='card' tabPosition='left'>
                        <TabPane tab='approach' key='1'>
                            {typeIn.map((v, i) => (
                                <Button
                                    type='primary'
                                    size='small'
                                    key={i}
                                    onClick={() => setFontType(`animated ${v}`)}
                                    ghost>
                                    {v}
                                </Button>
                            ))}
                        </TabPane>
                        <TabPane tab='exit' key='2'>
                            {typeOut.map((v, i) => (
                                <Button
                                    type='primary'
                                    size='small'
                                    key={i}
                                    onClick={() => setFontType(`animated ${v}`)}
                                    ghost>
                                    {v}
                                </Button>
                            ))}
                        </TabPane>
                        <TabPane tab='other' key='3'>
                            {typeOther.map((v, i) => (
                                <Button
                                    type='primary'
                                    size='small'
                                    key={i}
                                    onClick={() => setFontType(`animated ${v}`)}
                                    ghost>
                                    {v}
                                </Button>
                            ))}
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={14}>
                    <div style={{ fontSize: '4.8rem', textAlign: 'center', padding: '2rem' }} className={fontType}>
                        Animate.css
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default AnimationView
