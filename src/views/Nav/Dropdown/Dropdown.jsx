import React from 'react'
import { Layout, Divider, Menu, Dropdown, Row, Col, message, Button } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import '@/style/view-style/dropdown.less'

const { SubMenu } = Menu

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`)
}

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key='0'>1st menu item</Menu.Item>
        <Menu.Item key='1'>2nd menu item</Menu.Item>
        <Menu.Item key='2' disabled>
            3rd menu item (disabled)
        </Menu.Item>
        <SubMenu title='sub menu'>
            <Menu.Item>4rd menu item</Menu.Item>
            <Menu.Item>5th menu item</Menu.Item>
        </SubMenu>
    </Menu>
)

function handleButtonClick(e) {
    message.info('Click on left button.')
    console.log('click left button', e)
}

const DropdownView = () => (
    <Layout className='animated fadeIn'>
        <div>
            <WebBreadcrumb arr={['Navigation', 'Dropdown']}></WebBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>When to use</h3>
            <Divider />
            <p>
                When there are too many operation commands on the page, this component can be used to store operation elements. Click or move into the touch point and a drop-down menu will appear. You can select from the list and execute the corresponding command.
            </p>
        </div>
        <Row gutter={8}>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown overlay={menu}>
                        <Button type='link'>
                            Hover me <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='base-style'>
                    <Dropdown overlay={menu} placement='bottomLeft'>
                        <Button>bottomLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='bottomCenter'>
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='bottomRight'>
                        <Button>bottomRight</Button>
                    </Dropdown>
                    <br />
                    <Dropdown overlay={menu} placement='topLeft'>
                        <Button>topLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='topCenter'>
                        <Button>topCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='topRight'>
                        <Button>topRight</Button>
                    </Dropdown>
                </div>
            </Col>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button type='link'>
                            Click me <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </Col>
            <Col span={8}>
                <div className='base-style'>
                    <div id='components-dropdown-demo-dropdown-button'>
                        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown.Button overlay={menu} icon={<UserOutlined />}>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown overlay={menu}>
                            <Button>
                                Button <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </Col>
        </Row>
    </Layout>
)

export default DropdownView
