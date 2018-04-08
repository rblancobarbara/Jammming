import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [
      {
        name: "Tiny Dancer",
        artist: "Elton John",
        album: "Madman Across the Water"
      },
      {
        name: "Tiny Dancer",
        artist: "Tim McGraw",
        album: "Love Story"
      },
      {
        name: "Tiny Dancer",
        artist: "Rockabye Baby!",
        album: "Lullaby Renditions of Elton John"
      },
      {
        name: "Tiny Dancer",
        artist: "The White Raven",
        album: "Tiny Dancer"
      },
    ],
    playlistName: 'New Playlist',
    playlistTracks: []
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults}/>
              <Playlist />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
