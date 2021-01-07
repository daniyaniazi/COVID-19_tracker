import './App.css';
import styles from './App.module.css'
import React from "react";
import Header from "./components/HeaderComponent/Header";
import { fetchData } from "./api";



import { Charts, CountryPicker, Cards } from './components'
class App extends React.Component {
  state = {
    data: {},
    country: {},
  }
  async componentDidMount() {
    const fetchedData = await fetchData()
    // console.log(fetchedData)
    this.setState({
      data: fetchedData
    })
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    console.log(fetchedData)
    console.log(country)
    this.setState({
      data: fetchedData,
      country: country
    })
  }
  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }

}

export default App;
