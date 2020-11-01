import './endorsement.css';
import Sponsor from './sponsor';
import React from 'react';
import BusinessCard from './BusinessCard/BusinessCard'

const EndorsementPage = () => {
  const sponsors = require('./sponsors.json');
	const currentSponsor = sponsors.current.map((level) => 
		<div className="sponsor-level">
			<h3>{level.level}</h3>
			<div className="sponsors">
				{level.sponsors.map((sponsor) => {
					if (level.level === "Plasmid") {
						return <Sponsor size={300} sponsor={sponsor}></Sponsor>;
					} else {
						return <Sponsor size={400} sponsor={sponsor}></Sponsor>;
					}	
				})}
			</div>
		</div>
  );

	return <>
	<h1 className="endorsement-title">Endorsement</h1>
	<hr className="endorsement-linebar"></hr>
	<div className="endorsement-thank-you m-5">
		<h2>Thank Notes</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim integer sit lacinia ac tempus enim libero, sed nisl. Mattis integer consectetur vel, cursus lacus, consequat, adipiscing. Risus, id id bibendum turpis sit sit. Duis tortor sed erat sed arcu at</p>
	</div>
	<div className="sponsors-wrapper m-5">
    <h2>Current Sponsor</h2>
		{currentSponsor}
	</div>
    <div className="contact-wrapper">

    </div>
    <BusinessCard />
	</>
}

export default EndorsementPage;