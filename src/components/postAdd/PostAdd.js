import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './post-add.css';

export default class PostAdd extends Component {
   constructor(props) {
      super(props);
      this.state = {
         text: ''
      }
      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onValueChange(e) {
      this.setState({
         text: e.target.value
      })
   }

   onSubmit(e) {
      e.preventDefault();
      this.props.onAdd(this.state.text)
      this.setState({
         text: ''
      })
   }

   render() {
      return (
         <form
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
            <input
               type="text"
               placeholder="What is a new idea?"
               className="form-control new-post-label"
               onChange={this.onValueChange}
               value={this.state.text}
            />

            <Button
               outline
               color="secondary"
               type="submit">
               Add
            </Button>
         </form>
      )
   }
}