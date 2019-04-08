import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    bookmarks: null
  }

  getBookmarksFromFile = () => {
    const bk = import('./bookmarks.js')
    bk.then((res) => {
      const bookmarks = res.bk.children
      this.setState({ bookmarks: bookmarks })
    })
  }

  componentDidMount = () => {
    this.getBookmarksFromFile()
  }

  render() {
    return (
      <div>
        {console.log(this.state.bookmarks)}

      </div>
    );
  }
}

export default App;
