import React, { useState } from 'react'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import { Layout, Divider, Row, Col, Steps, Button, Form, Input, Select, Alert, Result } from 'antd'
import '@/style/view-style/form.less'

const { Step } = Steps
const { Option } = Select

const formItemLayout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 8
    }
}

const tailFormItemLayout = {
    wrapperCol: {
        offset: 8
    }
}

const Step1From = props => {
    const [form] = Form.useForm()
    const handleSelectChange = value => {
        form.setFieldsValue({
            Email: `${value === 'kenan' ? 'kenan@google.com' : 'maoli@google.com'}`
        })
    }

    const step1Submit = () => {
        form.validateFields()
            .then(values => {
                props.getFormData(values)
                props.setCurrent(1)
            })
            .catch(errorInfo => {
                console.log(errorInfo)
            })
    }

    const typeSelectBefore = (
        <Form.Item name='type' noStyle>
            <Select style={{ width: '10rem' }}>
                <Option value='twitter'>twitter</Option>
                <Option value='facebook'>facebook</Option>
            </Select>
        </Form.Item>
    )
    return (
        <div className='step1From'>
            <Form
                form={form}
                hideRequiredMark
                initialValues={{
                    user: 'Conan',
                    email: 'kenan@google.com',
                    password: 'there is only one truth!',
                    code: 'kenan0528',
                    type: 'twitter'
                }}
                {...formItemLayout}>
                <Form.Item
                    label='Receiver'
                    name='user'
                    rules={[
                        {
                            required: true,
                            message: 'Please select recipient'
                        }
                    ]}>
                    <Select onChange={handleSelectChange}>
                        <Option value='Conan'>Conan</Option>
                        <Option value='Uncle Maori'>Uncle Maori</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Receive mailbox'
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Please select recipient'
                        }
                    ]}>
                    <Select disabled>
                        <Option value='kenan@google.com'>kenan@google.com</Option>
                        <Option value='maoli@google.com'>maoli@google.com</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label='password'
                    name='password'
                    relues={[
                        {
                            required: true,
                            message: 'Please enter the docking password'
                        }
                    ]}>
                    <Input placeholder='Please enter the docking password' />
                </Form.Item>
                <Form.Item
                    label='Contact information'
                    name='code'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter contact information'
                        }
                    ]}>
                    <Input addonBefore={typeSelectBefore} placeholder='Please enter contact information' />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type='primary' onClick={step1Submit}>
                        Next step
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const Step2From = props => {
    const [visible, setVisible] = useState(true)
    const [iconLoading, setIconLoading] = useState(false)

    const step2Submit = () => {
        setIconLoading(true)
        setTimeout(() => {
            setIconLoading(false)
            props.setCurrent(2)
        }, 2000)
    }

    const { formData } = props
    return (
        <div className='step2From'>
            <Row>
                <Col span={8} offset={8}>
                    {visible ? (
                        <Alert
                            message='Make sure you enter the correct password or they may ignore you!'
                            type='warning'
                            closable
                            banner
                            afterClose={() => setVisible(false)}
                            {...formItemLayout}
                        />
                    ) : null}
                </Col>
            </Row>
            <Form hideRequiredMark className='show-data' {...formItemLayout}>
                <Form.Item label='Receiver'>{formData.user}</Form.Item>
                <Form.Item label='Receive mailbox'>{formData.email}</Form.Item>
                <Form.Item label='Cryptography'>{formData.password}</Form.Item>
                <Form.Item label='Contact channels'>{formData.type}</Form.Item>
                <Form.Item label='Contact information'>{formData.code}</Form.Item>
                <Divider />
                <Form.Item {...tailFormItemLayout}>
                    <Button type='primary' loading={iconLoading} onClick={step2Submit}>
                        send
                    </Button>
                    <Button onClick={() => props.setCurrent(0)}>Previous</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const Step3From = props => {
    return (
        <Result
            status='success'
            title='Sent successfully!'
            subTitle='Wait patiently for the good news!'
            extra={[
                <Button type='primary' key='console' onClick={() => props.setCurrent(0)}>
                    send one more
                </Button>,
                <Button key='buy'>View records</Button>
            ]}
        />
    )
}

const FormStep = props => {
    const [current, setCurrent] = useState(0)
    const [formData, setFormData] = useState(null)

    return (
        <Layout className='animated fadeIn'>
            <div>
                <WebBreadcrumb arr={['form', 'step form']}></WebBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>when to use</h3>
                <Divider />
                <p>When users need to collect different information step by step</p>
            </div>
            <Row>
                <Col span={24}>
                    <div className='base-style'>
                        <Divider orientation='left'>step-by-step form</Divider>
                        <div>
                            <Steps style={{ margin: '3rem auto', maxWidth: '65rem' }} current={current}>
                                <Step title='Fill in the receiving information'></Step>
                                <Step title='Confirm receipt of information'></Step>
                                <Step title='Finish'></Step>
                            </Steps>
                            {current === 0 && (
                                <Step1From getFormData={val => setFormData(val)} setCurrent={val => setCurrent(val)} />
                            )}
                            {current === 1 && <Step2From formData={formData} setCurrent={val => setCurrent(val)} />}
                            {current === 2 && <Step3From setCurrent={val => setCurrent(val)} />}
                        </div>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default FormStep
