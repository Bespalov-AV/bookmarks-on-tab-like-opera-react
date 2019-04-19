import React, { Component } from 'react';

//import Modal from 'react-bootstrap/Modal'

import './BkModal.css';

import BkFolder from './BkFolder'
import BkItem from './BkItem'

export default class BkOpenFolder extends React.Component {
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
        console.log("BkModal")
        const { title, bkFolder } = this.props
        let renderComponent = []

        if (!this.state.isOpenFolder) return null;

        if (!bkFolder.children) {
            renderComponent.push(
                <BkItem
                    title={title}
                />)
        } else {

            for (const currentBk of bkFolder.children) {

                if (!currentBk.children) {
                    renderComponent.push(
                        <BkItem
                            key={currentBk.id}
                            currentBk={currentBk}
                            title={currentBk.title}
                        />)
                } else {
                    renderComponent.push(
                        <BkFolder
                            key={currentBk.id}
                            currentBk={currentBk}
                            title={currentBk.title}
                        />
                    )
                }
            }
        }

        console.log(renderComponent)
        return (
            // <Modal
            //     size="lg"
            //     aria-labelledby="contained-modal-title-vcenter"
            //     centered
            //     show={this.state.isOpenFolder}
            //     onHide={this.closeOpenFolder}
            //     animation={true}
            // >
            //     <Modal.Header closeButton>
            //         {title}
            //     </Modal.Header>
            //     <Modal.Body
            //         style={{ background: "rgb(95, 110, 211)" }}
            //     >
            //         <div >
            //             <div className="bk-open-folder">
            //                 {renderComponent}
            //             </div>
            //         </div>
            //     </Modal.Body>
            // </Modal>
            <div>
                <div >
                    <div className="bk-open-folder">
                        {renderComponent}
                    </div>
                </div>
            </div>
        )
    }
}

