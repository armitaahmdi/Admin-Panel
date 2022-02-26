import React, { useState, useEffect } from 'react'
import BraftEditor from 'braft-editor'
import WebBreadcrumb from '@/components/WebBreadcrumb'
import { Layout, Divider } from 'antd'
import '@/style/view-style/editor.less'
import 'braft-editor/dist/index.css'

const EditorView = () => {
    const [state, setState] = useState({
        editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'),
        outputHTML: '<p>Hello <b>World!</b></p>'
    })

    let { editorState, outputHTML } = state

    useEffect(() => {
        let timer = setTimeout(() => {
            setState(prevState => {
                return {
                    ...prevState,
                    editorState: BraftEditor.createEditorState('Hello, <b>cute man! Lucky to meet you here!</b>')
                }
            })
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [state])

    let editorChange = editorState => {
        setState(prevState => {
            return { ...prevState, editorState, outputHTML: editorState.toHTML() }
        })
    }

    return (
        <Layout className='animated fadeIn'>
            <div>
                <WebBreadcrumb arr={['Other', 'Rich Text']}></WebBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>When to use</h3>
                <Divider />
                <p>
                    When the user needs some specific input, the rich text editor used by this page is
                    <a href='https://github.com/margox/braft-editor'>braft-editor</a>
                </p>
            </div>
            <div className='base-style'>
                <div className='editor'>
                    <BraftEditor value={editorState} onChange={editorChange} />
                </div>
            </div>
            <div className='base-style'>
                <h5>output content</h5>
                <div className='output-content'>{outputHTML}</div>
            </div>
        </Layout>
    )
}

export default EditorView
