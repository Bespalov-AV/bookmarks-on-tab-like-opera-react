import React, { Component } from 'react';
import './BkContainer.css';

import BkFolder from './BkFolder'
import BkItem from './BkItem'
import BkOpenFolder from './BkOpenFolder'

export default class BkContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpenFolder: false,
            idOpenFolder: 0
        }
    }

    setOpenFolder = (id) => {
        this.setState({ isOpenFolder: !this.state.isOpenFolder })
        console.log('click Container' + id)
        //this.props.setDoRanderChildren(id)
    }

    setDoRanderChildren = (id) => {
        this.setState({ idOpenFolder: id })
        console.log('setDoRanderChildren container ' + id)
    }

    render() {
        const { title, bkFolder } = this.props
        let renderComponent = []
        console.log('render ' + bkFolder.id)

        if (!bkFolder.children) {
            renderComponent.push(
                <BkItem
                    title={title}
                />)
        } else {

            for (const currentBk of bkFolder.children) {
                if (currentBk.index > 3) break;

                if (!currentBk.children) {
                    renderComponent.push(
                        <BkItem
                            title={currentBk.title}
                            currentBk={currentBk}
                        //setDoRanderChildren={this.setDoRanderChildren}
                        //idOpenFolder={this.state.idOpenFolder}
                        />)
                } else {
                    renderComponent.push(
                        <BkFolder
                            key={currentBk.id}
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
            <div className="contener-card">
                <React.Fragment>
                    <div className="title"
                        onClick={() => this.setOpenFolder(this.props.bkFolder.id)}
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
                        isOpenFolder={true}
                    />
                }
            </div>
        )
    }
}

