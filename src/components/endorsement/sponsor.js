import './sponsor.css';
import React, {useState} from 'react';

/**
 * @param sponsor sponsor information with {logo, name, link}
 * @param width sponsor card default width
 * @param height sponsor card default height
 * @param ratio percentage the sponsor card takes on the website width
 * @returns {React.Component} A component that displays a sponsor's information
 */
const Sponsor = props => {
	const [hover, toggleHover] = useState(false);
	const [loaded, toggleLoaded] = useState(false);

	return <>
		<a className="sponsor-wrapper mb-5" 
			href={props.sponsor.link}
			style={{ width: props.ratio + '%'}}
			>
			<div className={"sponsor"}
				onMouseEnter={() => {
					toggleHover(true);
					toggleLoaded(true);
				}}
				onMouseLeave={() => toggleHover(false)}
				style={{ maxWidth: props.width * 1.5 + 'px'}}
				>
				<section className={hover? "sponsor-img hidden" : "sponsor-img active"}
					style={{
						maxWidth: props.width + 'px',
						height: props.height + 'px',
						backgroundImage: 'url("' + props.sponsor.logo + '")'
						}}>
				</section>
				<section className={!loaded? "hidden-hover-mask" : 
					(hover? "hover-mask active" : "hover-mask hidden")}
					style={{
						lineHeight:  props.height + 'px',
						height: props.height + 'px'
						}}>
					VIEW MORE
				</section>
				
				<section className="sponsor-name">
					{props.sponsor.name.toUpperCase()}
				</section>
			</div>
		</a>
	</>
}

export default Sponsor;