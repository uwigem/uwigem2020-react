import Sponsor from './sponsor';
import React from 'react';
import BusinessCard from './BusinessCard/BusinessCard'
import Email from '../email/Email'
import styles from './endorsement.module.css'

/**
 * @returns {React.Component} return the endorsment page
 */
const EndorsementPage = () => {
	const sponsors = require('./sponsors.json');
	const thankNote = "Thank you for taking out time in understanding our purpose and able to decide to sponsor us, as this partnership will certainly bare fruits of success.";
	  
	const currentSponsor = sponsors.current.map((level, i) => 
		<div className={styles.sponsorLevel} key={i}>
			<h3>{level.level}</h3>
			<div className={styles.sponsors}>
				{level.sponsors.map((sponsor) => {
					return <Sponsor key={sponsor.name} sponsor={sponsor}></Sponsor>;
				})}
			</div>
		</div>
	);

	const pastSponsor = sponsors.past.map((level, i) => 
		<div className={styles.sponsorLevel} key={i}>
			<div className={styles.sponsors}>
				{level.sponsors.map((sponsor) => {
					return <Sponsor key={sponsor.name} sponsor={sponsor}></Sponsor>;
				})}
			</div>
		</div>
	);

	return <div className={styles.page}>
		<h1 className={styles.title}>Endorsement</h1>
		<hr className={styles.linebar}></hr>
		<div className={styles.thankYou}>
			<h2>Thank Notes</h2>
			<p>{thankNote}</p>
		</div>
		<div className={styles.sponsorsWrapper}>
		<h2>Current Sponsors</h2>
			{currentSponsor}
		<BusinessCard />
		<Email />
		<h2>Past Sponsors</h2>
			{pastSponsor}
		</div>	
	</div>
}

export default EndorsementPage;