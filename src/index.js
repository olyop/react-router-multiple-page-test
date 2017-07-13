// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import data
import storesObjImport from './data/stores'
import mainObjImport from './data/main'

// Import React Router
import { BrowserRouter as Router } from 'react-router-dom'

import Paths from './components/paths/paths'
import Nav from './components/nav'

// Index
const Index = props => (
	<Router>
		<div className="index">
		
			<Nav />
			
			<Paths
				mainObj={props.mainObj}
				storesObj={props.storesObj} />
		
		</div>
	</Router>
)

// Render to DOM
ReactDOM.render(
  <Index mainObj={mainObjImport} storesObj={storesObjImport} />,
  document.getElementById('root')
)