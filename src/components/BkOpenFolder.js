import React, { Component } from 'react';
import './BkContainer.css';

import BkFolder from './BkFolder'
import BkItem from './BkItem'

export default class BkOpenFolder extends Component {
    constructor(props) {
        super(props)

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
            <div>
                <div
                    className="title"
                //onClick={setOpenFolder}
                >
                    {title}
                </div>
                <div className="bk-open-folder">
                    {renderComponent}
                </div>
            </div>
        )
    }
}

