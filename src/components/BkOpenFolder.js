import React, { Component } from 'react';
import './BkOpenFolder.css';

import BkFolder from './BkFolder'
import BkItem from './BkItem'

export default class BkOpenFolder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpenFolder: this.props.isOpenFolder,
            idOpenFolder: 0
        }
    }

    setOpenFolder = () => {
        this.setState({ isOpenFolder: !this.state.isOpenFolder })
        console.log('click BkOpenFolder')
        //this.props.setOpenFolder()
    }
    closeOpenFolder = () => {
        this.setState({ isOpenFolder: false })
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
                            //currentBk={bkFolder}
                            title={currentBk.title}
                        />)
                } else {
                    renderComponent.push(
                        <BkFolder
                            key={currentBk.id}
                            //bkFolder={currentBk.children}
                            currentBk={currentBk}
                            title={currentBk.title}
                            setDoRanderChildren={this.setDoRanderChildren}
                            idOpenFolder={this.state.idOpenFolder}
                        />
                    )
                }
            }
        }

        return (
            <div className="bk-open-container ">
                <div>
                    <div className="title-container">
                        <div className="title"
                            onClick={this.setOpenFolder}
                        >
                            {title}
                        </div>
                        <div className="btn-close"
                            onClick={this.closeOpenFolder}
                        >
                            X
                        </div>
                    </div>

                    <div className="bk-open-folder">
                        {renderComponent}
                    </div>
                </div>
            </div>
        )
    }
}

