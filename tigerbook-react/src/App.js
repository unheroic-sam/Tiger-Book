import React, { Component } from 'react';
import SignIn from './components/SignIn/signIn';
import Register from './components/Register/Register';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import MainWindow from './components/MainWindow/MainWindow';

class App extends Component {
  
	constructor() {
		super()
		this.state = {
			isSignedIn: false,
			route: 'signIn',
      user: {
        userId: '',
        name: '',
        joined: '',
        entries: ''
      }
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
      			<NavigationBar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      			{ route === 'home'
      				?<div>
      					<MainWindow />
      				</div>
      			:(
      					route === 'register'
                ?<Register onRouteChange={this.onRouteChange} />
                :<SignIn onRouteChange={this.onRouteChange} />

      			)
      		}
      		</div>
    	);
  	};
}

export default App;
