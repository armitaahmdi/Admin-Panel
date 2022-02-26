import React, { useState } from 'react'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import {
    Alert,
    Layout,
    Row,
    Col,
    Divider,
    Form,
    Button,
    Input,
    InputNumber,
    Checkbox,
    Tooltip,
    Cascader,
    Select,
    DatePicker,
    Radio,
    Rate,
    Switch,
    Slider,
    AutoComplete,
    message
} from 'antd'
import { UserOutlined, LockOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import '@/style/view-style/form.less'

const { Option } = Select

const residences = [
    {
        value: 'beijing',
        label: 'Beijing',
        children: [
            {
                value: 'beijing',
                label: 'beijing',
                children: [
                    {
                        value: 'dongcheng',
                        label: 'dongcheng'
                    },
                    {
                        value: 'chaoyang',
                        label: 'chaoyang'
                    }
                ]
            }
        ]
    },
    {
        value: 'xizang',
        label: 'xizang',
        children: [
            {
                value: 'lasa',
                label: 'lasa',
                children: [
                    {
                        value: 'chengguan',
                        label: 'chengguan'
                    }
                ]
            },
            {
                value: 'ali',
                label: 'ali',
                children: [
                    {
                        value: 'gaer',
                        label: 'gaer'
                    }
                ]
            }
        ]
    }
]

const FormBase = props => {
    const [confirmDirty, setConfirmDirty] = useState(false)
    const [autoCompleteResult, setAutoCompleteResult] = useState([])
    const [visible, setVisible] = useState(true)

    const handleLoginFinish = values => { }

    const handleSubmitFinish = values => {
        console.log('This is the data you filled in' + values)
        message.info('You are great, you filled it up so quickly!')
    }

    const handleSubmitFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    const handleEmailChange = value => {
        if (!value) {
            setAutoCompleteResult([])
        } else {
            setAutoCompleteResult(['@google.com', '@163.com', '@qq.com'].map(domain => `${value}${domain}`))
        }
    }

    const formItemLayout = {
        labelCol: {
            xs: { span: 16 },
            sm: { span: 6 }
        },
        wrapperCol: {
            xs: { span: 16 },
            sm: { span: 10 }
        }
    }
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 16,
                offset: 0
            },
            sm: {
                span: 10,
                offset: 6
            }
        }
    }

    const prefixSelector = (
        <Form.Item name='phonePrefix' noStyle>
            <Select style={{ width: 70 }}>
                <Option value='86'>+86</Option>
                <Option value='87'>+87</Option>
            </Select>
        </Form.Item>
    )

    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website
    }))

    return (
        <Layout className='animated fadeIn'>
            <div>
                <WebBreadcrumb arr={['form', 'basic form']}></WebBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>when to use</h3>
                <Divider></Divider>
                <p>Used to create an entity or gather information.</p>
                <p>When the input data type needs to be verified.</p>
            </div>
            <Row>
                <Col span={24}>
                    <div className='base-style'>
                        <div>
                            {visible ? (
                                <Alert
                                    message='Youd better fill out the form carefully'
                                    type='warning'
                                    closable
                                    banner
                                    afterClose={() => setVisible(false)}
                                />
                            ) : null}
                        </div>

                        <Divider orientation='left'>login box</Divider>
                        <Row justify='center'>
                            <Col span={12} offset={6}>
                                <Form
                                    name='simple_login'
                                    className='login-form'
                                    initialValues={{
                                        remember: true
                                    }}
                                    onFinish={handleLoginFinish}
                                    {...formItemLayout}>
                                    <Form.Item
                                        name='username'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Username!'
                                            }
                                        ]}>
                                        <Input
                                            prefix={<UserOutlined className='site-form-item-icon' />}
                                            placeholder='Username'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name='password'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Password!'
                                            }
                                        ]}>
                                        <Input
                                            prefix={<LockOutlined className='site-form-item-icon' />}
                                            type='password'
                                            placeholder='Password'
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Form.Item name='remember' valuePropName='checked' noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                        <a className='login-form-forgot' href='/'>
                                            Forgot password
                                        </a>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type='primary' htmlType='submit' className='login-form-button'>
                                            Log in
                                        </Button>{' '}
                                        Or <a href='/'>register now!</a>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>

                        <Divider orientation='left'>basic functions</Divider>
                        <Form
                            {...formItemLayout}
                            name='normal_login'
                            onFinish={handleSubmitFinish}
                            onFinishFailed={handleSubmitFinishFailed}
                            initialValues={{
                                hobby: ['A', 'B'],
                                // adress: ['beijing', 'beijing', 'dongcheng'],
                                rate: 5,
                                phonePrefix: 86,
                                switch: true,
                                slider: 30
                            }}
                            scrollToFirstError>
                            <Form.Item
                                label={
                                    <span>
                                        username&nbsp;
                                        <Tooltip title='You can try to sound as good as possible, really!'>
                                            <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                }
                                name='username'
                                rules={[{ required: true, message: 'please enter user name' }]}>
                                <Input placeholder='please enter user name' />
                            </Form.Item>
                            <Form.Item label='gender' name='sex' rules={[{ required: true, message: 'Please select gender' }]}>
                                <Radio.Group>
                                    <Radio value='man'>male</Radio>
                                    <Radio value='women'>female</Radio>
                                    <Radio value='unknow'>unknown</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                label='Hobby'
                                name='hobby'
                                rules={[{ required: true, message: 'Please select at least one hobby' }]}>
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value='A'>A</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox disabled value='B'>
                                                B
                                            </Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value='C'>C</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item>
                            <Form.Item label='age' name='age' rules={[{ required: true, message: 'Please enter age' }]}>
                                <InputNumber placeholder='Please enter age' style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label='date of birth'
                                name='date-picker'
                                rules={[{ type: 'object', required: true, message: 'Please select a date' }]}>
                                <DatePicker style={{ width: '100%' }} placeholder='Please select a date' />
                            </Form.Item>
                            <Form.Item
                                label='email'
                                name='email'
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'please enter your vaild email!'
                                    },
                                    {
                                        required: true,
                                        message: 'please input your email'
                                    }
                                ]}>
                                <AutoComplete
                                    options={websiteOptions}
                                    onChange={handleEmailChange}
                                    placeholder='please input your email'>
                                    <Input />
                                </AutoComplete>
                            </Form.Item>
                            <Form.Item
                                label='password'
                                name='password'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!'
                                    }
                                ]}
                                hasFeedback>
                                <Input.Password placeholder='Please enter password' />
                            </Form.Item>
                            <Form.Item
                                label='confirm password'
                                name='confirm'
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!'
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve()
                                            }
                                            return Promise.reject('The passwords entered twice do not match!')
                                        }
                                    })
                                ]}>
                                <Input.Password
                                    onBlur={e =>
                                        setConfirmDirty(() => (confirmDirty ? confirmDirty : !!e.target.value))
                                    }
                                    placeholder='Please confirm your password'
                                />
                            </Form.Item>
                            <Form.Item
                                label='adress'
                                name='adress'
                                rules={[{ type: 'array', required: true, message: 'Please select an address!' }]}>
                                <Cascader options={residences} placeholder='Please select an address' />
                            </Form.Item>
                            <Form.Item
                                label='contact number'
                                name='phone'
                                extra='you better write your real phone number.'
                                rules={[{ required: true, message: 'Please type your phone number!' }]}>
                                <Input addonBefore={prefixSelector} />
                            </Form.Item>
                            <Form.Item label='score' name='rate' extra='how about this project.'>
                                <Rate allowHalf />
                            </Form.Item>
                            <Form.Item label='switch' name='switch' valuePropName='checked'>
                                <Switch />
                            </Form.Item>
                            <Form.Item label='slider' shouldUpdate={true}>
                                {({ getFieldValue }) => {
                                    return getFieldValue('switch') === true ? (
                                        <Form.Item name='slider'>
                                            <Slider />
                                        </Form.Item>
                                    ) : (
                                        <Form.Item name='slider'>
                                            <Slider disabled />
                                        </Form.Item>
                                    )
                                }}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout} name='agreement' valuePropName='checked'>
                                <Checkbox>
                                    read and understand <a href='/'>this agreement</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout} shouldUpdate={true}>
                                {({ getFieldValue }) => {
                                    return getFieldValue('agreement') === true ? (
                                        <Form.Item>
                                            <Button type='primary' htmlType='submit'>
                                                register
                                            </Button>
                                        </Form.Item>
                                    ) : (
                                        <Form.Item>
                                            <Button type='primary' htmlType='submit' disabled>
                                                register
                                            </Button>
                                        </Form.Item>
                                    )
                                }}
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default FormBase
