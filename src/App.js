import React, { Component } from 'react';
import './App.css';
import BkContainer from './components/BkContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bookmarks: []
    }

  }

  componentDidMount = () => {
    this.setState({ bookmarks: this.props.bk })
    // const myHeaders = new Headers({
    //   "Content-Type": "application/json",
    //   Accept: "application/json"
    // })

    // fetch("http://localhost:3000/bookmarks.json", { headers: myHeaders })
    //   .then(response => {
    //     console.log(response);
    //     this.setState({ response });
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log(this);
    //     this.setState({ bookmarks: data.children });
    //     console.log(this.bookmarks);
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

  }

  render() {
    const bookmarks = this.state.bookmarks.children
    console.log(bookmarks)

    if (!bookmarks) return ('Is Empty');

    return (
      <div>
        {bookmarks.map((currentBk) => (
          <BkContainer
            key={currentBk.id}
            bkFolder={currentBk.children}
            title={currentBk.title}
          />
        )
        )
        }
      </div>
    );
  }
}

export default App;
