import React, { Component } from 'react';
import SignIn from './components/SignIn/signIn';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  
	constructor() {
		super()
		this.state = {
			isSignedIn: false,
			route: 'signIn'
		}
	}

	onRouteChange = (route) => {
		if(route === 'signOut') {
			this.setState({isSignedIn: false})
		} else if (route === 'home') {
			this.setState({isSignedIn: true})
		}
		this.setState({route: route});
	}
  	
  	render() {
    	const { isSignedIn, route } = this.state;
    	return (
      		<div>
      			{ route === 'home'
      				?<div>
      					<Home />
      				</div>
      			:(
      				this.state.route === 'signIn'
      					?<SignIn onRouteChange={this.onRouteChange} />
      					:<Register onRouteChange={this.onRouteChange} />
      			)
      		}
      		</div>
    	);
  	};
}

export default App;
