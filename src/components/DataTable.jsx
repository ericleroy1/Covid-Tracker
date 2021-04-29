import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            data: []
        };
    }

    componentDidMount(){
        this.fetchDataAsync();
        console.log(this.data);
    }

    componentDidUpdate(){
        console.log(this.state.data);
    }

    async fetchDataAsync() {
        try {
            this.setState({...this.state, isFetching: true});
            const response = await axios.get("https://disease.sh/v3/covid-19/countries?yesterday=yesterday");
            this.setState({data: response.data, isFetching: false});
            console.log(response.data);
        } catch (e) {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        }
    };
    fetchData = this.fetchDataAsync;

    render(){
        return(
            <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Country</th>
                <th>Total Deaths</th>
                <th>Total Cases</th>
                <th>Deaths per Million</th>
                <th>New Cases</th>
                <th>New Deaths</th>
                </tr>
            </thead>
            <tbody>
            {this.state.data.map((dataCountry) => {
				return (
					<tr>
                        <td>{dataCountry.country}</td>
                        <td>{dataCountry.deaths}</td>
                        <td>{dataCountry.cases}</td>
                        <td>{dataCountry.deathsPerOneMillion}</td>
                        <td>{dataCountry.todayDeaths}</td>
                        <td>{dataCountry.todayCases}</td>
                    </tr>
				);
			})}
            </tbody>
        </Table>
        </div>
        )
    }

}

export default DataTable
