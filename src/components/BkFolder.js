import React, { Component } from 'react';
import './BkFolder.css';

import BkOpenFolder from './BkOpenFolder'

export default class BkFolder extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpenFolder: false }
    }


    setOpenFolder = () => {
        this.setState({ isOpenFolder: !this.state.isOpenFolder })
        console.log('click BkFolder')
    }

    render() {
        const { title, currentBk } = this.props
        return (
            <React.Fragment >
                <div
                    className="bk-folder"
                    onClick={this.setOpenFolder}
                >

                    {title}

                </div>

                {this.state.isOpenFolder &&
                    <BkOpenFolder
                        bkFolder={currentBk}
                        title={title}
                        setOpenFolder={this.setOpenFolder}
                    />
                }
            </React.Fragment >
        )
    }
}