import React from 'react';
import './BkItem.css';

export default class BkItem extends React.PureComponent {
    constructor(props) {
        super(props)

        this.actionClickBk = this.actionClickBk.bind(this)
    }

    getClassColor() {
        const colorInd = Math.round(Math.random() * 10)
        const className = { backgroundColor: `var(--bg-color${colorInd})` }
        return className
    }

    cutTitle(title) {
        return title.substring(0, 40)
    }

    actionClickBk(url, evt) {
        evt.preventDefault();
        window.open(url).focus();
        //window.open(url, "_self");
    }

    render() {
        const { currentBk, title, isModal, style } = this.props

        let styleColor = this.getClassColor()
        Object.assign(styleColor, style) 

        return (
            <div
                className="bk-item"
                style={styleColor}
                onClick={(evt) => this.actionClickBk(currentBk.url, evt)}
            >
                {this.cutTitle(title)}
            </div>
        )
    }
}