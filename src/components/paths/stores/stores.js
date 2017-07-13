import React from 'react'
import './stores.css'

import { Route, NavLink, Redirect } from 'react-router-dom'

import Location from './location/location'

const Stores = props => (
	<div className="stores">

		<h1 className="page-heading">Stores</h1>

		<div className="stores-nav">
			<p>Have a look at our stores:</p>
			<ul>
				{props.storesObj.map((store, index) => (
					<li key={store.id}>
						<NavLink to={props.match.url + '/' + store.city.toLowerCase().replace(/ /g,"_")}>
							{store.city}, {store.state}
						</NavLink>
					</li>
				))}
			</ul>
			<div className="store-info">
				
				{props.storesObj.map((store, index) => (
					<Route key={store.id}
						path={props.match.path + '/' + store.city.toLowerCase().replace(/ /g,"_")}
						render={ () => <Location mainObj={props.mainObj} obj={store} /> } />
				))}
				
				{/* Redirect to defualt course */}
				<Route path={props.match.path} exact render={ () => <Redirect to={props.match.path + '/' + props.storesObj[0].city.toLowerCase().replace(/ /g,"_")} /> } />
				
			</div>
		</div>

	</div>
)

export default Stores