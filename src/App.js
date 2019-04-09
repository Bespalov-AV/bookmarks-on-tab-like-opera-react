import React, { Component } from 'react';
import './App.css';
import BkContainer from './components/BkContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bookmarks: null,
      openIndex: 0
    }

  }

  componentDidMount = () => {
    this.setState({ bookmarks: this.props.bk })
  }

  setDoRander = () => {
    this.setState({ doRander: true })
    console.log('setDoRander')
  }

  render() {
    if (!this.state.bookmarks) return ('Is Empty');

    const bookmarks = this.state.bookmarks.children
    //console.log(bookmarks)

    return (
      <div className="flex-contener">
        <div className="contener">
          {bookmarks.map((currentBk) => (
            <BkContainer
              key={currentBk.id}
              bkFolder={currentBk}
              title={currentBk.title}
              setDoRander={this.setDoRander}
              doRander={this.state.doRander}
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
