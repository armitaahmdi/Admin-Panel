import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom'

// process pathname
const getOpenKeys = (string, collapsed) => {
    let newStr = '',
        newArr = [],
        arr = string.split('/').map(i => '/' + i)
    for (let i = 1; i < arr.length - 1; i++) {
        newStr += arr[i]
        newArr.push(newStr)
    }
    return collapsed ? [] : newArr
}

const SideMenu = props => {
    const [state, setstate] = useState({
        openKeys: [],
        selectedKeys: []
    })

    let { openKeys, selectedKeys } = state
    let menuProps = props.collapsed ? {} : { openKeys };

    // When the page is refreshed, it can be positioned to the menu display
    useEffect(() => {
        let { pathname } = props.location
        setstate(prevState => {
            return {
                ...prevState,
                selectedKeys: [pathname],
                openKeys: getOpenKeys(pathname)
            }
        })
    }, [props]);

    // Expand only one SubMenu
    const onOpenChange = openKeys => {
        setstate(prevState => {
            if (openKeys.length === 0 || openKeys.length === 1) {
                return { ...prevState, openKeys }
            }
            const latestOpenKey = openKeys[openKeys.length - 1]

            // This is related to the defined routing rules
            if (latestOpenKey.includes(openKeys[0])) {
                return { ...prevState, openKeys }
            } else {
                return { ...prevState, openKeys: [latestOpenKey] }
            }
        })
    }

    const renderMenuItem = ({ key, icon, title }) => (
        <Menu.Item key={key}>
            <Link to={key} replace>
                {icon}
                <span>{title}</span>
            </Link>
        </Menu.Item>
    )

    //Loop through the sub-items subs in the array to generate the sub-menu
    const renderSubMenu = ({ key, icon, title, subs }) => {
        return (
            <Menu.SubMenu
                key={key}
                title={
                    <span>
                        {icon}
                        <span>{title}</span>
                    </span>
                }>
                {subs &&
                    subs.map(item => {
                        return item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
                    })}
            </Menu.SubMenu>
        )
    }

    return (
        <Menu
            mode='inline'
            theme='dark'
            {...menuProps}
            selectedKeys={selectedKeys}
            onClick={({ key }) => setstate(prevState => ({ ...prevState, selectedKeys: [key] }))}
            onOpenChange={onOpenChange}>
            {props.menu && props.menu.map(item => {
                return item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
            })}
        </Menu>
    )
}

SideMenu.propTypes = {
    menu: PropTypes.array.isRequired
}

export default withRouter(SideMenu)
