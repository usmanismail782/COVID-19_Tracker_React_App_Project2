import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../api/fetchCountries';

import styles from '../countryPeaker/CountryPeaker.module.css';


const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">United States</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )

};

export default Countries;