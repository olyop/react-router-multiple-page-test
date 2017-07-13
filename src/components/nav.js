import React from 'react'

import './nav.css'

import { NavLink } from 'react-router-dom'

const Nav = props => (
	<div className="nav">
		<ul>
			<li><NavLink to="/" exact>Home</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/stores">Stores</NavLink></li>
		</ul>
	</div>
)

export default Nav