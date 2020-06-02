import React, { Component } from "react";
import PizzaForm from "../components/PizzaForm";
import PizzaList from "./PizzaList";

export class PizzaContainer extends Component {
  constructor() {
    super();
    this.state = {
      shouldRender: false,
      pizzas: [],
      currentPizza: {
        topping: "",
        size: "",
        vegetarian: false,
        id: 0,
      },
    };
  }

  handleCurrentPizza = (key, value) => {
    this.setState((prevState) => ({
      currentPizza: {
        ...prevState.currentPizza,
        [key]: value,
      },
    }));
  };

  handleEdit = ({ topping, size, vegetarian, id }) => {
    this.setState({
      currentPizza: {
        topping: topping,
        size: size,
        vegetarian: vegetarian,
        id: id,
      },
    });
  };

  // Fetches our database
  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((response) => response.json())
      .then((newpizzas) => {
        this.setState({
          pizzas: newpizzas,
        });
      });
  }

  // Does another fetch whenever a new pizza is added
  fetchData = () => {
    fetch("http://localhost:3000/pizzas")
      .then((response) => response.json())
      .then((newpizzas) => {
        this.setState({
          pizzas: newpizzas,
        });
      });
  };

  render() {
    return (
      <div>
        <PizzaForm
          shouldRender={this.fetchData}
          currentPizza={this.state.currentPizza}
          handleCurrentPizza={this.handleCurrentPizza}
        />
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default PizzaContainer;
