import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <div>
        {restaurantReviews.map(review => <Review deleteReview={this.props.deleteReview} key={review.id} review={review}/>)}
      </div>
    );
  }
};

export default Reviews;