import './sponsor.css';
import styles from './sponsor.module.css'
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
		<a className={styles.sponsorWrapper}
			href={props.sponsor.link}
			// style={{ width: props.ratio + '%'}}
			>
			<div className={styles.sponsor}
				onMouseEnter={() => {
					toggleHover(true);
					toggleLoaded(true);
				}}
				onMouseLeave={() => toggleHover(false)}
				// style={{ maxWidth: props.width * 1.5 + 'px'}}
				>
				<section className={`${styles.sponsorImg} ${hover ? styles.hidden : styles.active}`}
					style={{
						// height: props.height + 'px',
						backgroundImage: 'url("' + props.sponsor.logo + '")'
						}}>
				</section>
				<section className={!loaded? styles.hiddenHoverMask : 
					(`hover-mask ${styles.hoverMask}1 ${hover ? styles.active : styles.hidden}`)}
					style={{
						// lineHeight:  props.height + 'px',
						height: props.height + 'px'
						}}>
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