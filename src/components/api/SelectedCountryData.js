import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';



export const fetchSelectedCountryData = async (country) => {

    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);


        return { confirmed: confirmed.value, recovered: recovered.value, deaths: deaths.value, lastUpDate: lastUpdate };

    } catch (error) {
        return error;
    }
};