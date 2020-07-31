import React from "react";
import Header from "./components/header";
import Recipes from "./components/recipes";
import Search from "./components/search";
import "./App.css";

const API = "http://starlord.hackerearth.com/recipe";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null,
      searchtext: "",
    };
  }

  //fetching the API
  componentDidMount() {
    this.setState({ loading: true });
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Sorry bad news.");
        }
      })
      .then((data) => this.setState({ data: data, loading: false }))
      .catch((error) => this.setState({ error: error, loading: false }));
  }

  //rendering the DOM
  render() {
    const { data, loading, error, searchtext } = this.state;

    const filtereddata = data.filter((item) =>
      item.name.toLowerCase().includes(searchtext.toLowerCase())
    );

    if (error) {
      return <p>{error.message}</p>;
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="app">
        <div>
          <div className="searchnheader">
            <Search
              handleChange={(e) =>
                this.setState({ searchtext: e.target.value })
              }
            />
            <Header />
          </div>
          <Recipes data={filtereddata} />
        </div>
      </div>
    );
  }
}

export default App;
