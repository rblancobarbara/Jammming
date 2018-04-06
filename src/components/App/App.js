import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
//import Playlist from './Playlist';
//import SearchBar from './SearchBar';
//import SearchResults from './SearchResults';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            Add a SearchBar component
              <div className="App-playlist">
                Add a SearchResults component
                Add a Playlist component
              </div>
          </div>
      </div>
    );
  }
}

export default App;
