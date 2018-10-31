import React, { Component } from 'react';
import SignIn from './components/SignIn/signIn';
import Register from './components/Register/Register';
import CreatePostBox from './components/CreatePostBox/CreatePostBox';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Home from './components/Home/Home';

class App extends Component {
  
	constructor() {
		super()
		this.state = {
			isSignedIn: false,
			route: 'signIn',
      showPostCreate: false,
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
    } else if (route === 'createPostBox') {
      this.setState({showPostCreate: true})
    } 
		this.setState({route: route});
	}
  	
  	render() {
    	const { isSignedIn, route, showPostCreate } = this.state;
    	return (
      		<div>
      			<NavigationBar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} showPostCreate={showPostCreate}/>
            { route === 'home'
      				?<div>
                <Home showPostCreate={showPostCreate} onRouteChange={this.onRouteChange}/>
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
