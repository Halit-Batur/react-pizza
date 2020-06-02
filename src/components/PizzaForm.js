// import React from "react";
import React, { useState } from "react";

const PizzaForm = (props) => {
  // Post requests a new pizza when Submit is clicked
  const postPizza = async (e) => {
    e.preventDefault();
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        topping: props.currentPizza.topping,
        size: props.currentPizza.size,
        vegetarian: props.currentPizza.vegetarian == true ? true : false,
      }),
    };

    fetch("http://localhost:3000/pizzas", configurationObject)
      .then((status) => (status.ok ? props.shouldRender() : null))
      .then(() => {
        props.handleCurrentPizza("topping", "");
      });
  };

  const updatePizza = (e) => {
    e.preventDefault();
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        topping: props.currentPizza.topping,
        size: props.currentPizza.size,
        vegetarian: props.currentPizza.vegetarian === true ? true : false,
      }),
    };
    fetch(
      `http://localhost:3000/pizzas/${props.currentPizza.id}`,
      configurationObject
    )
      .then((status) => (status.ok ? props.shouldRender() : null))
      .then(() => {
        props.handleCurrentPizza("id", 0);
        props.handleCurrentPizza("topping", "");
      });
  };

  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          name="topping"
          placeholder="Pizza Topping"
          value={props.currentPizza.topping}
          onChange={(e) => props.handleCurrentPizza("topping", e.target.value)}
        />
      </div>
      <div className="col">
        <select
          value={props.currentPizza.size}
          onChange={(e) => props.handleCurrentPizza("size", e.target.value)}
          name="size"
          className="form-control"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            name="veg"
            checked={props.currentPizza.vegetarian === false ? false : true}
            onChange={(e) => props.handleCurrentPizza("vegetarian", true)}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            name="veg"
            checked={props.currentPizza.vegetarian === true ? false : true}
            onChange={(e) => props.handleCurrentPizza("vegetarian", false)}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={props.currentPizza.id !== 0 ? updatePizza : postPizza}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default PizzaForm;
