import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


import './BkModal.css';

import BkFolder from './BkFolder'
import BkItem from './BkItem'

export default class BkOpenFolder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpenFolder: this.props.isOpenFolder,
            //isOpenFolder: false,
            idOpenFolder: 0
        }
    }

    setOpenFolder = () => {
        this.setState({ isOpenFolder: !this.state.isOpenFolder })
        console.log('click BkOpenFolder')
        this.props.setOpenFolder()
    }
    closeOpenFolder = () => {
        this.setState({ isOpenFolder: false })
        this.props.setOpenFolder()
    }

    setDoRanderChildren = (id) => {
        this.setState({ idOpenFolder: id })
        console.log('BkOpenFolder ' + id)
    }

    render() {
        const { title, bkFolder } = this.props
        let renderComponent = []

        if (!this.state.isOpenFolder) return null;

        if (!bkFolder.children) {
            renderComponent.push(
                <BkItem
                    //bkFolder={currentBk.children}
                    //currentBk={bkFolder}
                    title={title}
                />)
        } else {

            for (const currentBk of bkFolder.children) {

                if (!currentBk.children) {
                    renderComponent.push(
                        <BkItem
                            //bkFolder={currentBk.children}
                            key={currentBk.id}
                            currentBk={currentBk}
                            title={currentBk.title}
                        />)
                } else {
                    renderComponent.push(
                        <BkFolder
                            key={currentBk.id}
                            //bkFolder={currentBk.children}
                            currentBk={currentBk}
                            title={currentBk.title}
                        // setDoRanderChildren={this.setDoRanderChildren}
                        // idOpenFolder={this.state.idOpenFolder}
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
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <div>
                            <div className="title"
                                onClick={this.setOpenFolder}
                            >
                                {title}
                            </div>
                        </div>

                        <div className="bk-open-folder">
                            {renderComponent}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeOpenFolder}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

