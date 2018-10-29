import React from 'react';
import './Navigation.css';

const NavigationBar = ({ onRouteChange, isSignedIn}) => {
	if(isSignedIn === false) {
		return(
			<div className='wrapper-nav'>
				<div className='col1'>
					<h1>Tiger Book</h1>
				</div>
				<div className='col2'>
					<h1 onClick = {() => onRouteChange('home')}>home</h1>
				</div>
			</div>
		)
	} else {
		return (
			<div className='wrapper-nav'>
				<div className='createPost'>
					<h1>Create a Post</h1>
				</div>
				<div className='visitCommunity'>
					<h1>Visit Community</h1>
				</div>
				<div className='account'>
					<h1>Account</h1>
				</div>
				<div className='signOut'>
					<h1 onClick = {() => onRouteChange('signOut')}>Sign Out</h1>
				</div> 
			</div>
		)
	}
}

export default NavigationBar;