import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css'


const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedDataCountries, setfetchedDataCountries] = useState([]);
    useEffect(() => {
        const fetchCountriesApi = async () => {
            setfetchedDataCountries(await fetchCountries())
        }
        fetchCountriesApi();
        console.log(fetchedDataCountries)
    }, []);
    return (
        <div>

            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>

                    <option value="">Global</option>
                    {fetchedDataCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
Global
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker