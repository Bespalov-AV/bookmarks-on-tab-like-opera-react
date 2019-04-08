import React, { Component } from 'react';
import './App.css';
import BkContainer from './components/BkContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bookmarks: null
    }

  }

  componentDidMount = () => {
    this.setState({ bookmarks: this.props.bk })
  }

  render() {
    if (!this.state.bookmarks) return ('Is Empty');

    const bookmarks = this.state.bookmarks.children
    console.log(bookmarks)

    return (
      <div className="flex-contener">
        <div className="contener">
          {bookmarks.map((currentBk) => (
            <BkContainer
              key={currentBk.id}
              bkFolder={currentBk}
              title={currentBk.title}
            />
          )
          )
          }
        </div>
      </div>
    );
  }
}

export default App;
