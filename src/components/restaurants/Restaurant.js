import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    // const { restaurant } = this.props;
    // debugger;
    return (
      <ul>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </ul>
    );
  }
};

export default Restaurant;
