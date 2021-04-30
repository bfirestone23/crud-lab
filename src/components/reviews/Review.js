import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    // const { review } = this.props;

    return (
      <ul>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </ul>
    );
  }

};

export default Review;
