import './endorsement.css';
import Sponsor from './sponsor';
import React, {useState, useEffect} from 'react';

const EndorsementPage = () => {
  const sponsors = require('./sponsors.json');
	const currentSponsor = sponsors.current.map((level) => 
		<div className="sponsor-level">
			<p>{level.level}</p>
			<div className="sponsors">
				{level.sponsors.map((sponsor) => {
					if (level.level == "Plasmid") {
						return <Sponsor size={300} sponsor={sponsor}></Sponsor>;
					} else {
						return <Sponsor size={400} sponsor={sponsor}></Sponsor>;
					}	
				})}
			</div>
		</div>
  );
  
  const pastSponsor = sponsors.past.map((level) => 
		<div className="sponsor-level">
			<div className="sponsors">
				{level.sponsors.map((sponsor) => {
						return <Sponsor size={400} sponsor={sponsor}></Sponsor>;
					
				})}
			</div>
		</div>
	);

	return <>
		<div className="header">
			<h1>Endorsement</h1>
      <hr className="linebar"></hr>
      <h2>Thank Notes</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim integer sit lacinia ac tempus enim libero, sed nisl. Mattis integer consectetur vel, cursus lacus, consequat, adipiscing. Risus, id id bibendum turpis sit sit. Duis tortor sed erat sed arcu at</p>
		</div>
		<div className="sponsors-wrapper">
      <h2>Current Sponsor</h2>
			{currentSponsor}
		</div>
    <div className="contact-wrapper">

    </div>
    <div className="sponsors-wrapper">
      <h2>Past Sponsor</h2>
			{pastSponsor}
		</div>
	</>
}

export default EndorsementPage;