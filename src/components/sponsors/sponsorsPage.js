import './sponsorsPage.css';
import Sponsor from './sponsor';
import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-flexbox-grid';

const SponsorsPage = props => {
	const sponsors = require('./sponsors.json');
	const content = sponsors.map((level) => 
		<div className="sponsor-level">
			<p>{level.level}</p>
			<Row around="xs" className="sponsors">
				{level.sponsors.map((sponsor) => {
					if (level.level == "Plasmid") {
						return <Col cs={5}>
								<Sponsor size={200} sponsor={sponsor}></Sponsor>
							</Col>;
					} else {
						return <Col cs={3}>
								<Sponsor size={300} sponsor={sponsor}></Sponsor>
							</Col>;
					}	
				})}
			</Row>
		</div>
	);

	return <>
		<div className="header">
			<h1>Sponsors</h1>
		</div>
		<div className="sponsors-wrapper">
			{content}
		</div>
	</>
}

export default SponsorsPage;