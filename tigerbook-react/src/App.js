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

  loadUser = (data) => {
    this.setState({
      id: data.id,
      name: data.name,
      joined: data.joined
    })
  }

	onRouteChange = (route) => {
		if(route === 'signOut') {
			this.setState({isSignedIn: false})
		} else if (route === 'home') {
			this.setState({isSignedIn: true})
    } 
		this.setState({route: route});
	}

  onRouteChangePost = (route) => {
    if(route === 'createPostBox'){
      this.setState({showPostCreate: true})
    }
  }
  	
  	render() {
    	const { isSignedIn, route, showPostCreate } = this.state;
      return (
      		<div>
            <NavigationBar onRouteChangePost={this.onRouteChangePost} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} showPostCreate={showPostCreate}/>
            { route === 'home'
      				?<div>
                <Home onRouteChangePost={this.onRouteChangePost} onRouteChange={this.onRouteChange} showPostCreate={showPostCreate}/>
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
