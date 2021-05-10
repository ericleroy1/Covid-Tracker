import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);


        // goes through the data object and creates a new
        // object out of the specified key:value pairs
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        return modifiedData;
    } catch (error) {
        
    }
}