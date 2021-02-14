// import './sponsor.css';
import styles from './sponsor.module.css'
import React from 'react';

/**
 * @param sponsor sponsor information with {logo, name, link}
 * @returns {React.Component} A component that displays a sponsor's information
 */
const Sponsor = props => {
	return <>
		<a className={styles.sponsorWrapper}
			href={props.sponsor.link}>
			<div className={styles.sponsor}
				>
				<section className={styles.sponsorImg}
					style={{
						backgroundImage: 'url("' + props.sponsor.logo + '")'
						}}>
				</section>
				<section className={styles.hoverMask}>
					VIEW MORE
				</section>
				
				<section className={styles.name}>
					{props.sponsor.name.toUpperCase()}
				</section>
			</div>
		</a>
	</>
}

export default Sponsor;