import React, {useState, useEffect} from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

const tabs = ['Project', 'About', 'Get Involved'];

const NavBar = props => {
	return (
		<div className='nav-bar-container'>
			<Link className='nav-tab' to='/'>Home</Link>
			<Link className='nav-tab' to='/about'>about</Link>
		</div>
	)
}

export default NavBar;