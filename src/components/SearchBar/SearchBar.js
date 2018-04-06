import React from 'react';
import ReactDOM from 'react-dom';

import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
