import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

class Order extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
};

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(ProtoTypes.string).isRequired,
  orderInfo: ProtoTypes.shape({
    customerName: ProtoTypes.string.isRequired,
    orderedAt: ProtoTypes.number.isRequired
  }).isRequired
};
