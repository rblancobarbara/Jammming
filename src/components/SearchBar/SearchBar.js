import React from 'react';
//import ReactDOM from 'react-dom';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(event) {
    //this.setState({event.target.value: term});
  }

  search() {
    //this.setState({this.props.onSearch: term});
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
          />
        <a>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
