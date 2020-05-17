import React from "react";
import { Cards, Chart, Picker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const res = await fetchData();
    this.setState({ data: res });
  }

  handleCountryChange = async country => {
    const countryInfo = await fetchData(country);
    this.setState({ data: countryInfo, country: country });
  };

  render() {
    return (
      <div className={styles.container}>
        <img src={image} alt="covid-19" className={styles.image} />
        <Cards data={this.state.data} />
        <Picker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
