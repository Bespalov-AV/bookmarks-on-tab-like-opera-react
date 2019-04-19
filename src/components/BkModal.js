import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal'

import './BkModal.css';

import BkFolder from './BkFolder'
import BkItem from './BkItem'

export default class BkOpenFolder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpenFolder: this.props.isOpenFolder,
        }
    }

    setOpenFolder = () => {
        this.setState({ isOpenFolder: !this.state.isOpenFolder })
        this.props.setOpenFolder()
    }
    closeOpenFolder = () => {
        this.setState({ isOpenFolder: false })
        this.props.setOpenFolder()
    }

    render() {
        const { title, bkFolder, isOpenFolder } = this.props
        let renderComponent = []

        //if (!this.state.isOpenFolder) return null;

        if (!bkFolder.children) {
            renderComponent.push(
                <BkItem
                    title={title}
                />)
        } else {
            let style = {}
            if (isOpenFolder) {
                style.width = '120px'
                style.height = '90px'
                style.fontSize = '14px'
            }

            for (const currentBk of bkFolder.children) {

                if (!currentBk.children) {
                    renderComponent.push(
                        <BkItem
                            key={currentBk.id}
                            currentBk={currentBk}
                            title={currentBk.title}
                            style={style}
                            isModal={true}
                        />)
                } else {
                    renderComponent.push(
                        <BkFolder
                            key={currentBk.id}
                            currentBk={currentBk}
                            title={currentBk.title}
                            style={style}
                            isModal={true}
                        />
                    )
                }
            }
        }

        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.isOpenFolder}
                onHide={this.closeOpenFolder}
                animation={true}
            >
                <Modal.Header closeButton>
                    {title}
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <div className="bk-open-folder">
                            {renderComponent}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

