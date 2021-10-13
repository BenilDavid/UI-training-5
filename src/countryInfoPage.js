import './css/style.css';
import App from './App';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function InfoPage(props) {
	const [country, setCountry] = useState([]);
	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((res) => {
			console.log(res.data);
			setCountry(res.data);
		});
	}, []);

	var boundCountries = [];
	props.location.state.selectedCountry.borders.map((element) => {
		country.map((data) => {
			if (data.fifa === element) {
				boundCountries.push(data);
			}
		});
	});
	console.log(boundCountries);

	const selectedBorderCountry = (e) => {
		console.log(e.target.innerHTML);
	};
	return (
		<>
			<div className="country-info">
				<div className="container">
					<div className="back">
						<Link to="/UI-training-5/">
							<button className="back-btn">Back</button>
						</Link>
					</div>
					<div className="country-details">
						<img src={props.location.state.selectedCountry.flags.png} alt="" />
						<div className="info">
							<h2 className="capital">
								{props.location.state.selectedCountry.name.common}
							</h2>
							<div className="details">
								<div className="left-details">
									<div>
										<span className="sub-heading">Native Name</span> :{' '}
										{
											Object.values(
												props.location.state.selectedCountry.name.nativeName
											)[0].common
										}
									</div>
									<div>
										<span className="sub-heading">Population</span> :
										{props.location.state.selectedCountry.population}
									</div>
									<div>
										<span className="sub-heading">Region</span> :{' '}
										{props.location.state.selectedCountry.region}
									</div>
									<div>
										<span className="sub-heading">Sub Region</span> :{' '}
										{props.location.state.selectedCountry.subregion}
									</div>
									<div>
										<span className="sub-heading">Capital</span> :{' '}
										{props.location.state.selectedCountry.capital}
									</div>
								</div>
								<div className="right-details">
									<div>
										<span className="sub-heading">Top Level Domain</span>:{' '}
										{props.location.state.selectedCountry.tld}
									</div>
									<div>
										<span className="sub-heading">Currencies</span> :{' '}
										{
											Object.values(
												props.location.state.selectedCountry.currencies
											)[0].name
										}
									</div>
									<div>
										<span className="sub-heading">Languages</span> :{' '}
										{Object.values(
											props.location.state.selectedCountry.languages
										).map((data) => {
											return data + ', ';
										})}
									</div>
								</div>
							</div>
							<div className="border-countries">
								<span className="sub-heading">Border Countries</span> :
								{boundCountries.map((data) => {
									return (
										<Link
											to={{
												pathname: `/UI-training-5/info${data.name.common}`,
												state: { selectedCountry: data },
											}}
										>
											<button className="border-country-names">
												{data.name.common}
											</button>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoPage;
