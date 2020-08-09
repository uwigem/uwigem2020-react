import React, {useState} from 'react';
import './navbar.css';

import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const tabs = ['Homepage', 'Archive', 'Get Involved', 'Team', 'About'];
const paths = ['/', '/archive', '/involvement', '/team', '/about'];

const NavBar = () => {
	const [tab, setTab] = useState(paths.indexOf(window.location.hash.substring(1)));
	let links = [];

	for (let i = 0; i < tabs.length; i++) {
		links.push(
		<Link
			className='nav-tab'
			to={paths[i]}
			onClick={() => setTab(i)}
			style={{borderBottom: tab === i ? '1vh solid #4B2E83' : 'none'}}
		>
			{tabs[i]}
		</Link>)
	}

	return (
		<div className='nav-bar-container'>
			<img className='logo-left' src="logo192.png"/>
			{links}
			<img className='logo-right' src="logo192.png"/>
		</div>
	)
}

export default NavBar;