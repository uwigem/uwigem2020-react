import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

const tabs = ['Home', 'About', 'Projects', 'Get Involved'];

const NavBar = () => {
	return (
		<div className='nav-bar-container'>
			<Link className='nav-tab' to='/'>Home</Link>
			<Link className='nav-tab' to='/projects'>Projects</Link>
			<Link className='nav-tab' to='/about'>About</Link>
			<Link className='nav-tab' to='/involvement'>Get Involved</Link>
		</div>
	)
}

export default NavBar;