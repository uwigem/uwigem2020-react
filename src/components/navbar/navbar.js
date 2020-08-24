import React, {useState} from 'react';
import './navbar.css';

import {Link} from 'react-router-dom';

const tabs = ['Homepage', 'Archive', 'Get Involved', 'Team', 'About'];
const paths = ['/', '/archive', '/involvement', '/team', '/about'];
const leftLogo = "https://2019.igem.org/wiki/images/3/32/T--Washington--HLogo2.png";
const rightLogo = "https://2019.igem.org/wiki/images/3/32/T--Washington--HLogo2.png";

const NavBar = () => {
	const [tab, setTab] = useState(paths.indexOf(window.location.hash.substring(1)));
	let links = [];

	for (let i = 0; i < tabs.length; i++) {
		links.push(
		<Link
			className='nav-tab'
			to={paths[i]}
			onClick={() => setTab(i)}
			style={{borderBottom: tab === i ? '0.75vw solid #4B2E83' : 'none'}}
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