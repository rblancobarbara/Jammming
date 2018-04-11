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
        id: "001",
        name: "Tiny Dancer",
        artist: "Elton John",
        album: "Madman Across the Water"
      },
      {
        id: "002",
        name: "Tiny Dancer",
        artist: "Tim McGraw",
        album: "Love Story"
      },
      {
        id: "003",
        name: "Tiny Dancer",
        artist: "Rockabye Baby!",
        album: "Lullaby Renditions of Elton John"
      },
      {
        id: "004",
        name: "Tiny Dancer",
        artist: "The White Raven",
        album: "Tiny Dancer"
      },
    ],
    playlistName: 'New Playlist',
    playlistTracks: [
      {
        id: "100",
        name: "Stronger",
        artist: "Britney Spears",
        album: "Oops!... I Did It Again"
      },
      {
        id: "200",
        name: "So Emotional",
        artist: "Whitney Houston",
        album: "Whitney"
      },
      {
        id: "300",
        name: "It's Not Right, But It's Okay",
        artist: "Whitney Houston",
        album: "My Love Is Your Love"
      },
    ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks.filter(track.id);
      this.setState({
        playlistTracks: tracks
      })
    }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack}
                />
              <Playlist
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
