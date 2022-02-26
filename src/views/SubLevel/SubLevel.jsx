import React from 'react'
import { Layout, Divider } from 'antd'
import WebBreadcrumb from '@/components/WebBreadcrumb'

const SubLevel = () => (
    <Layout>
        <div>
            <WebBreadcrumb arr={['Multi-level navigation']} />
        </div>
        <div className='base-style'>
            <h3>Multi-level navigation</h3>
            <Divider />
            <p>This is a multi-level navigation</p>
        </div>
    </Layout>
)

export default SubLevel