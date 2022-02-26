import React from 'react';
import { Layout, Divider } from 'antd';
import WebBreadcrumb from '@/components/WebBreadcrumb';

const AboutView = () => {
    return (
        <Layout>
            <div className="web-breadcrumb">
                <WebBreadcrumb arr={['About']}></WebBreadcrumb>            </div>
            <div className='base-style'>
                <h3>About the author</h3>
                <Divider />
                <p>This guy is lazy and has nothing left...</p>
            </div>
        </Layout>
    )
}

export default AboutView;
