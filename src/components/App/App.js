import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [
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
                  playlistName: 'Richard Pop-Hits',
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
    ],
                  };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks: this.state.playlistTracks});
    }
  }

  removeTrack(track) {
    let filteredTracks = this.state.playlistTracks.filter(_track => _track.id !== track.id);
    this.setState({playlistTracks: filteredTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.filter(this.state.playlistTracks.URI);
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar
              onSearch={this.search}
              />
            <div className="App-playlist">
              <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack}
                />
              <Playlist
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
                />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
