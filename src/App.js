import React, { Component } from 'react';
import { Cards, Chart, CountrySelect } from './components';
import { fetchData, fetchChartData } from './api/index';
import styles from './App.module.css';

class App extends Component {

  state = {
    data: {},
  };

async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({ data:fetchedData });
};



  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>{new Date(this.state.data.lastUpdate).toDateString()}</h1>
        <Cards data={data}/>
        <Chart />
        <CountrySelect />
      </div>
    )
  }
}

export default App;
