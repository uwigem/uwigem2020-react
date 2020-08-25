import './sponsor.css';
import React, {useState, useEffect} from 'react';

/**
 * A component that displays a sponsor's information
 * @param {*} props {size, sponsor: {logo, name, link}}
 * 
 */
const Sponsor = props => {
	return <>
	<a className="sponsor-wrapper" href={props.sponsor.link}>
		<div className="sponsor"
			style={{width: props.size + 'px',
			height: props.size + 50 + 'px'}}>

			<section className="sponsor-img"
				style={{width: props.size + 'px',
					height: props.size + 'px'}}>
				<img src={props.sponsor.logo}
					width={props.size}
					alt={props.sponsor.name}></img>
			</section>
			
			<section className="sponsor-name">
				{props.sponsor.name}
			</section>
		</div>
	</a>
	
	</>
}

export default Sponsor;