import React, { useState } from 'react';
import { Layout, Row, Col, Upload, message, Button, Divider, Modal } from 'antd';
import { PlusOutlined, UploadOutlined, InboxOutlined, LoadingOutlined } from '@ant-design/icons';
import WebBreadcrumb from '@/components/WebBreadcrumb';

const { Dragger } = Upload

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text'
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    }
}

function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

function getBase_64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
}

const UploadView = () => {
    const [state, setState] = useState({
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://unsplash.com/photos/A5E-ym6WyGM/download?ixid=MnwxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE2NDU4MDQ4MTA&force=true'
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://unsplash.com/photos/q0xBMaMuii8/download?ixid=MnwxMjA3fDF8MXxhbGx8MTF8fHx8fHwyfHwxNjQ1ODA0ODEw&force=true'
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://unsplash.com/photos/ahtFAYSPza0/download?ixid=MnwxMjA3fDB8MXxhbGx8MTd8fHx8fHwyfHwxNjQ1ODA0ODEw&force=true'
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://unsplash.com/photos/CIrJuUI75hg/download?ixid=MnwxMjA3fDF8MXxhbGx8MjF8fHx8fHwyfHwxNjQ1ODA0ODEw&force=true'
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'done',
                url: 'https://unsplash.com/photos/6-wc9Oa256k/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NDU4MDQ4MTA&force=true'
            }
        ]
    })

    const [loading, setLoading] = useState(false)
    const [imageUrl, setimageUrl] = useState()

    let { previewVisible, previewImage, fileList } = state

    const handleChange = info => {
        getBase64(info.file.originFileObj || info.file, imageUrl => {
            setimageUrl(() => {
                if (info.file.status === 'done') {
                    return imageUrl
                }
            })
            setLoading(() => (info.file.status === 'uploading' ? true : false))
        })
    }

    const handleCancel = () =>
        setState(prevState => {
            return { ...prevState, previewVisible: false }
        })

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase_64(file.originFileObj)
        }
        setState(prevState => {
            return { ...prevState, previewImage: file.url || file.preview, previewVisible: true }
        })
    }
    const handle_Change = ({ fileList }) =>
        setState(prevState => {
            return { ...prevState, fileList }
        })

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className='ant-upload-text'>Upload</div>
        </div>
    )
    return (
        <Layout>
            <div>
                <WebBreadcrumb arr={['Other', 'Upload']}></WebBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>When to use</h3>
                <p>Uploading is the process of publishing information (web pages, text, pictures, videos, etc.) to a remote server through web pages or uploading tools</p>
            </div>
            <Row gutter={8}>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>Normal Mode</Divider>
                        <Upload {...props}>
                            <Button>
                                <UploadOutlined /> Click to Upload
                            </Button>
                        </Upload>
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>Photo Wall</Divider>
                        <div className='clearfix'>
                            <Upload
                                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                listType='picture-card'
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handle_Change}>
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                                <img alt='example' style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>Custom Mode</Divider>
                        <Upload
                            name='avatar'
                            listType='picture-card'
                            className='avatar-uploader'
                            showUploadList={false}
                            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                            beforeUpload={beforeUpload}
                            onChange={handleChange}>
                            {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>Drag to upload</Divider>
                        <Dragger {...props}>
                            <p className='ant-upload-drag-icon'>
                                <InboxOutlined />
                            </p>
                            <p className='ant-upload-text'>Click or drag file to this area to upload</p>
                            <p className='ant-upload-hint'>
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or
                                other band files
                            </p>
                        </Dragger>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default UploadView;
