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
			style={{ maxWidth:props.size * 1.5 + 'px'}}
			>
			<section className={hover? "sponsor-img hidden" : "sponsor-img active"}
				style={{maxWidth: props.size + 'px',
					height: props.size - props.hwdiff + 'px',
					backgroundImage: 'url("' + props.sponsor.logo + '")'}}>
			</section>
			<section className={!loaded? "hidden-hover-mask" : 
				(hover? "hover-mask active" : "hover-mask hidden")}
				style={{lineHeight:  props.size - props.hwdiff + 'px',
					height: props.size - props.hwdiff + 'px'}}>
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