import React from 'react'
import './location.css'

const Location = props => (
	<div className="location">
		<h2>{props.obj.city}, {props.obj.state}</h2>
		<p>{props.obj.desc}</p>
		<iframe
			frameBorder="0" style={{ border: '0', width: '100%', height: '400px' }}
			src={'https://www.google.com/maps/embed/v1/place?key=' + props.mainObj.google_maps_api_key + '&q=' + props.obj.city.replace(/ /g,"+") + ',' + props.obj.state}>
		</iframe>
	</div>
)

export default Location