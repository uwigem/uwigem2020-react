import './endorsement.css';
import Sponsor from './sponsor';
import React from 'react';
import BusinessCard from './BusinessCard/BusinessCard'
import Email from '../email/Email'

/**
 * @returns {React.Component} return the endorsment page
 */
const EndorsementPage = () => {
	const sponsors = require('./sponsors.json');
	const thankNote = "Thank you for taking out time in understanding our purpose and able to decide to sponsor us, as this partnership will certainly bare fruits of success.";
	  
	const currentSponsor = sponsors.current.map((level) => 
		<div className="sponsor-level">
			<h3>{level.level}</h3>
			<div className="sponsors">
				{level.sponsors.map((sponsor) => {
					return <Sponsor width={400} height={250} ratio={50} sponsor={sponsor}></Sponsor>;
				})}
			</div>
		</div>
	);

	const pastSponsor = sponsors.past.map((level) => 
		<div className="sponsor-level">
			<div className="sponsors">
				{level.sponsors.map((sponsor) => {
					return <Sponsor width={200} height={150} ratio={25} sponsor={sponsor}></Sponsor>;
				})}
			</div>
		</div>
	);

	return <>
		<h1 className="endorsement-title">Endorsement</h1>
		<hr className="endorsement-linebar"></hr>
		<div className="endorsement-thank-you m-5">
			<h2>Thank Notes</h2>
			<p>{thankNote}</p>
		</div>
		<div className="sponsors-wrapper m-5">
		<h2>Current Sponsors</h2>
			{currentSponsor}
		<BusinessCard />
		<Email />
		<h2>Past Sponsors</h2>
			{pastSponsor}
		</div>	
	</>
}

export default EndorsementPage;