import React, { Component } from 'react';

import './search.css';

export default class Search extends Component {
   constructor(props) {
      super(props)
      this.state = {
         term: ''
      }
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
   }

   onUpdateSearch(e) {
      const term = e.target.value;
      this.setState({ term });
      this.props.onUpdateSearch(term); // function will be used on App
   }

   render() {
      return (
         <input
            className="form-control search-input"
            type="text"
            placeholder="Search posts"
            onChange={this.onUpdateSearch}
         />
      )
   }
}
