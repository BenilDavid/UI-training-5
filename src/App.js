import logo from './logo.svg';
import './App.css';
import './css/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [country, setCountry] = useState([]);
	const [region, setRegion] = useState([]);
	const [name, setName] = useState([]);
	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((res) => {
			console.log(res.data);
			setCountry(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(`https://restcountries.com/v3.1/region/${region}`).then((res) => {
			console.log('running second use effect');
			setCountry(res.data);
		});
	}, [region]);

	useEffect(() => {
		// console.log(name.name.common);
		if (name === false) {
			console.log('false in useeffect');
			axios.get('https://restcountries.com/v3.1/all').then((res) => {
				console.log(res.data);
				setCountry(res.data);
			});
		} else {
			axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
				console.log('running third use effect');
				setCountry(res.data);
			});
		}
	}, [name]);

	// filter selected region countries
	const selectedRegion = (e) => {
		console.log(e.target.value);
		setRegion(e.target.value);
	};

	const searchedCountryName = (e) => {
		console.log(e.target.value);
		var searchedCountry = [];
		country.map((data) => {
			if (e.target.value === data.name.common) {
				searchedCountry.push(data.name.common);
				console.log('present in countries');
			}
		});
		if (searchedCountry.length > 0) {
			console.log(searchedCountry);
			// setCountry(searchedCountry);
			setName(searchedCountry);
		} else {
			console.log('nothing in array');
			setName(false);
		}
	};

	return (
		<>
			<header className="header">
				<div className="header-container">
					<div className="logo">Where in the world?</div>
					<div className="mode">Dark Mode</div>
				</div>
			</header>
			<main>
				<div className="container">
					<div className="search-filter-container">
						<div className="searchBox">
							<input
								className="searchCountry"
								type="text"
								placeholder="Search for a country.."
								onChange={searchedCountryName}
							/>
						</div>
						<div className="filterBox">
							<select name="" id="" onChange={selectedRegion}>
								<option selected="selected" disabled="disabled">
									Filter by Region
								</option>
								<option value="Africa">Africa</option>
								<option value="Americas">America</option>
								<option value="Asia">Asia</option>
								<option value="Europe">Europe</option>
								<option value="Oceania">Oceania</option>
							</select>
						</div>
					</div>

					<div className="countries-container">
						{country.map((data) => (
							<div className="countryBox">
								<img className="countryLogo" src={data.flags.svg} alt="" />
								<div className="country-details">
									<h3 className="country-name">{data.name.common}</h3>
									<div className="population">
										<span className="sub-heading">Population</span> :{' '}
										{data.population}
									</div>
									<div className="region">
										<span className="sub-heading">Region</span> : {data.region}
									</div>
									<div className="capital">
										<span className="sub-heading">Capital</span> :{' '}
										{data.capital}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
