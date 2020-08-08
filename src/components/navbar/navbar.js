import React, {useState} from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

const tabs = ['Home', 'Archive', 'Get Involved', 'About'];

const NavBar = () => {
	const [tab, setTab] = useState('Home')

	return (
		<div>
			<img className='left-logo' src="logo192.png"/>
			<img className='right-logo' src="logo192.png"/>
			<div className='nav-bar-container'>
				<Link className='nav-tab' to='/'
				onClick={() => setTab(tabs[0])}
				style={{borderBottom: tab === tabs[0] ? '1vh solid #4B2E83' : 'none'}}
				>
					Homepage
				</Link>
				<Link
				className='nav-tab'
				to='/archive'
				onClick={() => setTab(tabs[1])}
				style={{borderBottom: tab === tabs[1] ? '1vh solid #4B2E83' : 'none'}}
				>
					Archive
				</Link>
				<Link
				className='nav-tab'
				to='/involvement'
				onClick={() => setTab(tabs[2])}
				style={{borderBottom: tab === tabs[2] ? '1vh solid #4B2E83' : 'none'}}
				>
					Get Involved
				</Link>
				<Link
				className='nav-tab'
				to='/about' 
				onClick={() => setTab(tabs[3])}
				style={{borderBottom: tab === tabs[3] ? '1vh solid #4B2E83' : 'none'}}
				>
					About
				</Link>
			</div>
		</div>
	)
}

export default NavBar;