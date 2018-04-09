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
    playlistTracks: [
      {
        name: "Stronger",
        artist: "Britney Spears",
        album: "Oops!... I Did It Again"
      },
      {
        name: "So Emotional",
        artist: "Whitney Houston",
        album: "Whitney"
      },
      {
        name: "It's Not Right, But It's Okay",
        artist: "Whitney Houston",
        album: "My Love Is Your Love"
      },
    ]
    };
  }

  addTrack(track) {
    //if (TrackList.track.id !== playlistTracks.track.id) {
      //playlistTracks.push(track);
    //}
    this.setState = this.state.addTrack;
    this.addTrack = this.addTrack.bind(this);
  }

  removeTrack(track) {
    
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
                onAdd={this.addTrack} />
              <Playlist
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
