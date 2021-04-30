import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    // debugger;
    return(
      <div>
        {this.props.restaurants.map(restaurant => <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant}/>)}
      </div>
    );
  }
};

export default Restaurants;