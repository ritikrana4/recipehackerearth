import React from "react";
import Item from "../components/item";

class Recipes extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className="recipe-main">
        {data.map((item) => (
          <div key={item.id}>
            <Item data={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default Recipes;
