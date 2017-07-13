import React from 'react'
import './paths.css'

import { Route, Switch } from 'react-router-dom'

// Import Paths
import Home from './home/home'
import About from './about/about'
import Stores from './stores/stores'
import NotFound from './not-found/not-found'

const Paths = props => (
	<div className="container paths">
		<Switch>
			
			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
			<Route path="/stores" render={ ({ match }) => (
				<Stores
					match={match}
					mainObj={props.mainObj}
					storesObj={props.storesObj} />	
			)} />
			
			<Route component={NotFound} />
			
		</Switch>
	</div>
)

export default Paths