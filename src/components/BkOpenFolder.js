import React, { Component } from 'react';
import './BkOpenFolder.css';

import BkFolder from './BkFolder'
import BkItem from './BkItem'

export default class BkOpenFolder extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpenFolder: false }
    }

    setOpenFolder = () => {
        this.setState({ isOpenFolder: !this.state.isOpenFolder })
        console.log('click BkOpenFolder')
        this.props.setOpenFolder()
    }

    render() {
        const { title, bkFolder, setOpenFolder } = this.props
        let renderComponent = []

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
                        <div className="btn-close">X</div>
                    </div>

                    <div className="bk-open-folder">
                        {renderComponent}
                    </div>
                </div>
            </div>
        )
    }
}

