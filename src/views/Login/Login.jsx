import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Input, Form, Button, Divider, message, notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
// import axios from '@/api'
// import { API } from '@/api/config'
import '@/style/view-style/login.less'

const Login = props => {
    const [loading, setLoading] = useState(false)

    const handleSubmitFinish = values => {
        console.log('Success:', values)
        // let { username, password } = values
        //axios
        // .post(`${API}/login`, { username, password })
        // .then(res => {
        // if (res.data.code === 0) {
        // localStorage.setItem('user', JSON.stringify(res.data.data.user))
        // localStorage.setItem('token', res.data.data.token)
        // props.history.push('/')
        // message.success('Login successful!')
        // } else {
        // message.error('Login failed!')
        // }
        // })
        // .catch(err => {
        // message.error('Login failed!')
        // })

        // You can do permission verification here. The simulation interface returns the user permission ID
        switch (values.username) {
            case 'admin':
                values.auth = 0
                break
            default:
                values.auth = 1
        }

        localStorage.setItem('user', JSON.stringify(values))
        setLoading(true)
        setTimeout(() => {
            message.success('Login successful!')
            props.history.push('/')
        }, 2000)
    }

    const handleSubmitFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    useEffect(() => {
        notification.open({
            message: 'Welcome',
            duration: null,
            description: 'test description'
        })
        return () => {
            notification.destroy()
        }
    }, [])

    return (
        <Layout className='login animated fadeIn'>
            <div className='model'>
                <div className='login-form'>
                    <h3>Login</h3>
                    <Divider />
                    <Form onFinish={handleSubmitFinish} onFinishFailed={handleSubmitFinishFailed}>
                        <Form.Item
                            // label="Username"
                            name='username'
                            rules={[{ required: true, message: 'Please enter a username' }]}>
                            <Input placeholder='Username' prefix={<UserOutlined className='site-form-item-icon' />} />
                        </Form.Item>
                        <Form.Item
                            // label="Password"
                            name='password'
                            rules={[{ required: true, message: 'Please enter your password' }]}>
                            <Input.Password
                                type='password'
                                placeholder='password'
                                prefix={<LockOutlined className='site-form-item-icon' />}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='login-form-button' loading={loading}>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(Login)