import './sponsor.css';
import React, {useState} from 'react';

/**
 * A component that displays a sponsor's information
 * @param {*} props {size, sponsor: {logo, name, link}}
 * 
 */
const Sponsor = props => {
	const [hover, toggleHover] = useState(false);
	const [loaded, toggleLoaded] = useState(false);
	return <>
	<a className="sponsor-wrapper" 
		href={props.sponsor.link}>
		<div className={"sponsor"}
			onMouseEnter={() => {
				toggleHover(true);
				toggleLoaded(true);
			}}
            onMouseLeave={() => toggleHover(false)}>
			<section className={hover? "sponsor-img hidden" : "sponsor-img active"}
				style={{maxWidth: props.size + 'px',
					height: props.size - 150 + 'px',
					backgroundImage: 'url("' + props.sponsor.logo + '")'}}>
			</section>
			<section className={!loaded? "hidden-hover-mask" : 
				(hover? "hover-mask active" : "hover-mask hidden")}
				style={{lineHeight:  props.size - 150 + 'px',
					height: props.size - 150 + 'px'}}>
				VIEW MORE
			</section>
			
			<section className="sponsor-name">
				{props.sponsor.name}
			</section>
		</div>
	</a>
	
	</>
}

export default Sponsor;