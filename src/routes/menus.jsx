import React from 'react'
import {
    HomeOutlined,
    CompassOutlined,
    FormOutlined,
    PieChartOutlined,
    PaperClipOutlined,
    BarsOutlined,
    UserOutlined,
    FundViewOutlined
} from '@ant-design/icons'

const menus = [
    {
        key: '/index',
        title: 'front page',
        icon: <HomeOutlined />,
        auth: [1]
    },
    {
        title: 'navigation',
        key: '/nav',
        icon: <CompassOutlined />,
        subs: [
            { title: 'dropdown', key: '/nav/dropdown', icon: '' },
            { title: 'menu', key: '/nav/menu', icon: '' },
            { title: 'steps', key: '/nav/steps', icon: '' }
        ]
    },
    {
        title: 'form',
        key: '/form',
        icon: <FormOutlined />,
        subs: [
            { title: 'basic form', key: '/form/base-form', icon: '' },
            { title: 'step form', key: '/form/step-form', icon: '' }
        ]
    },
    {
        title: 'exhibit',
        key: '/show',
        icon: <PieChartOutlined />,
        subs: [
            { title: 'table', key: '/show/table', icon: '' },
            { title: 'collapse', key: '/show/collapse', icon: '' },
            { title: 'tree', key: '/show/tree', icon: '' },
            { title: 'tabs', key: '/show/tabs', icon: '' }
        ]
    },
    {
        title: 'others',
        key: '/others',
        icon: <PaperClipOutlined />,
        auth: [1],
        subs: [
            { title: 'progress', key: '/others/progress', icon: '' },
            { title: 'animation', key: '/others/animation', icon: '' },
            { title: 'upload', key: '/others/upload', icon: '' },
            { title: '404', key: '/404', icon: '' },
            { title: '500', key: '/500', icon: '' }
        ]
    },
    {
        title: 'about',
        key: '/about',
        icon: <UserOutlined />,
        auth: [1]
    },
    {
        title: 'test',
        key: '/test',
        icon: <FundViewOutlined />,
        auth: [1],
        subs: [
            { title: 'Example 1', key: '/test/example1', icon: '' },
            { title: 'Example 2', key: '/test/example2', icon: '' }
            // { title: 'Example 3', key: '/test/example3', icon: '' },
        ]
    }
]

export default menus
