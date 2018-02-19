// Code Goes Here

import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render (){
    return (
      <div>
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>;
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length}
          scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by
          {this.props.orderInfo.customerName} at
          {this.props.orderInfo.orderedAt}
          </li>
        </ul>
      </div>
    )// is required
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
}

// kinda like validations
//saying what type of data you'll expect
// property on the component class is always propTypes
// while the React prop types you assign to them are capitalized as PropTypes

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  // orderInfo: PropTypes.object.isRequired
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  }).isRequired
};

export default Order; 
