import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
	render (){
	
		const location = {
			lat:28.455169,
			lng:77.255859
		}
		return (
		 <div style={{width:300, height:600, background:'red'}}>
			This is google Map
			<Map center={location}/>
		
		 <div>
			<Places />
		 </div>
		 </div>
        )
	}
}

ReactDom.render(<App />, document.getElementById('app'))