import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  // Renders the pizzas
  renderPizzas = () => {
    return this.props.pizzas.map((pizza, index) => {
      return (
        <Pizza key={index} pizza={pizza} handleEdit={this.props.handleEdit} />
      );
    });
  };

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{this.renderPizzas()}</tbody>
      </table>
    );
  }
}

export default PizzaList;
