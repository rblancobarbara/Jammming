import React from 'react';
//import ReactDOM from 'react-dom';

import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <Track track={this.props.track}/>
        <Track />
        <Track />
      </div>
    )
  }
}

export default TrackList;
