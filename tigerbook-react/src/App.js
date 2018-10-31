import React, { Component } from 'react';
import SignIn from './components/SignIn/signIn';
import Register from './components/Register/Register';
import CreatePostBox from './components/CreatePostBox/CreatePostBox';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Home from './components/Home/Home';
import { UtilContextProvider } from './context/utilContext';

class App extends Component {
  
	constructor() {
		super()
		this.state = {
			isSignedIn: false,
			route: 'signIn',
      showPostCreate: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
		}
	}

  loadUser = (data) => {
    this.setState({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
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
    } else if(route === 'closePostBox'){
      this.setState({showPostCreate: false})
    }
  }
  	
  	render() {
    	const { isSignedIn, route, showPostCreate } = this.state;
      return (
        <UtilContextProvider>
      		<div>
            <NavigationBar onRouteChangePost={this.onRouteChangePost} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} showPostCreate={showPostCreate}/>
            { route === 'home'
      				?<div>
                <Home onRouteChangePost={this.onRouteChangePost} onRouteChange={this.onRouteChange} showPostCreate={showPostCreate}/>
      				</div>
      			:(
      					route === 'register'
                ?<Register onRouteChange={this.onRouteChange}  loadUser={this.loadUser}/>
                :<SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>

      			)
      		}
      		</div>
          </UtilContextProvider>
    	);
  	};
}

export default App;
