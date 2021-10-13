import logo from './logo.svg';
import './App.css';
import './css/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App(props) {
	// showing all countries
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
		country.find((data) => {
			if (e.target.value.toLowerCase() === data.name.common.toLowerCase()) {
				searchedCountry.push(data.name.common);
			}
		});
		if (searchedCountry.length > 0) {
			console.log(searchedCountry);

			setName(searchedCountry);
		} else {
			setName(false);
		}
	};

	const clickedCountry = (e) => {
		console.log('clicked me', e.target.dataset.value);
	};

	return (
		<>
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
							<Link
								to={{
									pathname: `/UI-training-5/info${data.name.common}`,
									state: { selectedCountry: data },
								}}
							>
								<div
									className="countryBox"
									data-value={data.area}
									onClick={clickedCountry}
								>
									<img
										className="countryLogo"
										data-value={data.area}
										src={data.flags.svg}
										alt=""
									/>
									<div className="country-details" data-value={data.area}>
										<h3 className="country-name" data-value={data.area}>
											{data.name.common}
										</h3>
										<div className="population" data-value={data.area}>
											<span className="sub-heading" data-value={data.area}>
												Population
											</span>{' '}
											: {data.population}
										</div>
										<div className="region" data-value={data.area}>
											<span className="sub-heading" data-value={data.area}>
												Region
											</span>{' '}
											: {data.region}
										</div>
										<div className="capital" data-value={data.area}>
											<span className="sub-heading" data-value={data.area}>
												Capital
											</span>{' '}
											: {data.capital}
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
