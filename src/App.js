import React, { Component } from 'react';
import './App.css';
import BkContainer from './components/BkContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bookmarks: null,
      idOpenFolder: 0
    }

  }

  componentDidMount = () => {
    this.setState({ bookmarks: this.props.bk })
  }

  setDoRanderChildren = (id) => {
    this.setState({ idOpenFolder: id })
    console.log('setDoRander ' + id)
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
            // setDoRanderChildren={this.setDoRanderChildren}
            // idOpenFolder={this.state.idOpenFolder}
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
