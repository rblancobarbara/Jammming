import React from 'react';
//import ReactDOM from 'react-dom';

import './Track.css';

class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here</h3>
          <p>track artist will go here | track album will go here</p>
        </div>
        <a className="Track-action">"+ or - will go here"</a>
      </div>
    )
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>
    }
    return <a className="Track-action" onClick={this.addTrack}>+</a>;
  }
  /*
  renderAction() {
    if (isRemoval.ok)
     {
        <anchor>'-'</anchor>
      } else
      {
        <anchor>'+'</anchor>
      }
  }
  */
}

export default Track;
