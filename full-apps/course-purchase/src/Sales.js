import React, {Component} from 'react';

class Sales extends Component {
  sumPrice(price) {
    this.setState({
      total: this.state.total + price
    });
  }
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  render() {
    let courses = this.props.items.map((item, key) => {
      return <Course name={item.name} price={item.price} key={key} sumPrice={this.sumPrice} active={item.active}/>
    })
    return (
      <div>
        <h1>You can buy courses:
        </h1>
        <div id="courses">{courses}</div>
        <p id="total">Total {this.state.total}</p>
      </div>
    );
  }
}
class Course extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default Sales;
