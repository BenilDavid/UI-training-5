import logo from './logo.svg';
import './App.css';
import './css/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	// let countryData;
	// fetch('https://restcountries.com/v3.1/all').then((response) =>
	// 	response.json().then((data) => {
	// 		console.log(data);
	// 		countryData = data;
	// 	})
	// );
	const [country, setCountry] = useState([]);

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((res) => {
			console.log(res.data);
			setCountry(res.data);
		});
	}, []);

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
							/>
						</div>
						<div className="filterBox">
							<select name="" id="">
								<option value="Africa">Africa</option>
								<option value="America">America</option>
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
