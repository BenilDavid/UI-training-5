import React from 'react';

function Header(props) {
	return (
		<div>
			<h1>{props.message}</h1>
			<header className="header">
				<div className="header-container">
					<div className="logo">Where in the world?</div>
					<div className="mode">Dark Mode</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
