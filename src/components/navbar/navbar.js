import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navbar.css';

// Names of navbar tabs
const tabs = ['Homepage', 'Archive', 'Get Involved', 'Team', 'Endorsements'];

// Paths corresponding to navbar tabs
const paths = ['/', '/archive', '/involvement', '/team', '/endorsement'];

// Logos on each side of navbar tabs
const leftLogo = "https://2019.igem.org/wiki/images/3/32/T--Washington--HLogo2.png";
const rightLogo = "https://2019.igem.org/wiki/images/3/32/T--Washington--HLogo2.png";

/**
 * @returns {React.Component} represents the navigation bar
 */
const NavBar = () => {
	// Sets active tab using path
	const [tab, setTab] = useState(paths.indexOf(window.location.hash.substring(1)));
	let links = [];
	const history = useHistory();

	// Updates active tab
	useEffect(() => {
		return history.listen(() => { 
			setTab(paths.indexOf(window.location.hash.substring(1)));
		}) 
	}, [history]);

	// Create list of Links to render
	for (let i = 0; i < tabs.length; i++) {
		links.push(
		<Link
			className='nav-tab'
			to={paths[i]}
			style={{borderBottom: tab === i ? '0.75vw solid #4B2E83' : 'none'}}
			key={paths[i]}
		>
			{tabs[i]}
		</Link>)
	}

	return (
		<div id='nav-bar-container'>
			<img id='logo-left' className='logo' src={leftLogo} alt='Logo'/>
			{links}
			<img id='logo-right' className='logo' src={rightLogo} alt='Logo'/>
		</div>
	)
}

export default NavBar;