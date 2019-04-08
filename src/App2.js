import React, { Component } from 'react';
import './App.css';

import BkContener from './components/BkContener';

class App extends Component {
    super()
    state = {
        bookmarks: null
    }
    componentDidMount = () => {
        const myHeaders = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        })

        fetch("http://localhost:3000/bookmarks.json", {
            headers: myHeaders,

        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ data });
            })

    }

    render() {
        const bookmarks = this.state.bookmarks
        console.log(bookmarks)

        if (!bookmarks) return ('Is Empty');

        const Contener = bookmarks.map((currentBk) => {
            return (
                <BkContener
                    key={currentBk.id}
                    bkFolder={currentBk.children}
                    title={currentBk.title}
                >
                </BkContener>)
        })

        return (
            { Contener }
        );
    }
}

export default App;
