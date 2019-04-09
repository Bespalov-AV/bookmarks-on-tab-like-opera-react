import React, { Component } from 'react';
import './BkContainer.css';

import BkFolder from './BkFolder'
import BkItem from './BkItem'
import BkOpenFolder from './BkOpenFolder'



export default class BkContainer extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpenFolder: false }
    }

    setOpenFolder = () => {
        this.setState({ isOpenFolder: !this.state.isOpenFolder })
    }

    render() {
        const { title, bkFolder } = this.props
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
                if (currentBk.index > 3) break;

                if (!currentBk.children) {
                    renderComponent.push(
                        <BkItem
                            //bkFolder={currentBk.children}
                            //currentBk={bkFolder}
                            title={currentBk.title}
                        />)
                } else {
                    console.log(currentBk)
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
                <React.Fragment>
                    <div className="title"
                        onClick={this.setOpenFolder}
                    >
                        {title}

                    </div>
                    <div className="bk-contener">
                        {renderComponent}
                    </div>
                </React.Fragment>

                {this.state.isOpenFolder &&
                    <BkOpenFolder
                        bkFolder={bkFolder}
                        title={title}
                        setOpenFolder={this.setOpenFolder}
                    />
                }
            </div>
        )
    }
}

