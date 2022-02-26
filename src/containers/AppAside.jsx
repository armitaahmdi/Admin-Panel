import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import SideMenu from '@/components/SideMenu'

const { Sider } = Layout

const AppAside = props => {
    let { menuToggle, menu } = props
    return (
        <Sider className='aside' trigger={null} collapsible collapsed={menuToggle}>

            <SideMenu menu={menu} collapsed={menuToggle}></SideMenu>
        </Sider>
    )
}

AppAside.propTypes = {
    menuToggle: PropTypes.bool,
    menu: PropTypes.array.isRequired
}

export default AppAside
