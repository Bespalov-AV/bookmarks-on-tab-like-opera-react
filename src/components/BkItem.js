import React from 'react';
import './BkItem.css';

export default class BkItem extends React.PureComponent {
    constructor(props) {
        super(props)

        this.actionClickBk = this.actionClickBk.bind(this)

        console.log("BkItem - constructor")
    }

    getClassColor() {
        const colorInd = Math.round(Math.random() * 10)
        const className = { backgroundColor: `var(--bg-color${colorInd})` }
        return className
    }

    actionClickBk(url, evt) {
        evt.preventDefault();
        //window.open(url).focus();
        window.open(url, "_self");
    }

    componentWillMount() {
        console.log("BkItem - componentWillMount")
    }
    componentDidMount() {
        console.log("BkItem - componentDidMount")
    }

    render() {
        const { currentBk, title } = this.props
        const style = this.getClassColor()
        console.log("BkItem")

        return (
            <div
                className="bk-item"
                style={style}
                onClick={(evt) => this.actionClickBk(currentBk.url, evt)}
            >
                {title}
            </div>
        )
    }
}