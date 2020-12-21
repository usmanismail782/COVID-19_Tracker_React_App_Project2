import React, { useContext } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { DataContext } from '../api/DataContext'
import styles from '../countryPeaker/CountryPeaker.module.css';


const Countries = ({ handleCountryChange }) => {

    const { countries } = useContext(DataContext)

    


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)} >
                <option value="">World Wide</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )

};

export default Countries;