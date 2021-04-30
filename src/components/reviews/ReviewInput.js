import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review:</label>
          <input onChange={this.handleChange} value={this.state.text} type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
