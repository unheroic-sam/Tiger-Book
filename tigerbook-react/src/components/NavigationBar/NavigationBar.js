import React from 'react';
import './Navigation.css';

const NavigationBar = ({ onRouteChange, isSignedIn, onRouteChangePost }) => {
	if(isSignedIn === false) {
		return(
			<div className='wrapper-nav'>
				<h1>Tiger Book</h1>
				<div className='col2'>
					<h1 onClick = {() => onRouteChange('home')}>home</h1>
				</div>
			</div>
		)
	} else {
		return (
			<div className='wrapper-nav'>
				<div className= 'createPost'>
					<h1 onClick = {() => onRouteChangePost('createPostBox')}>Create Post</h1>
				</div>
				<div className='visitCommunity'>
					<h1>Visit Community</h1>
				</div>
				<div className='account'>
					<h1>Account</h1>
				</div>
				<div className='sign-out'>
					<h1 onClick = {() => onRouteChange('signOut')}>Sign Out</h1>
				</div> 
			</div>
		)
	}
}
export default NavigationBar;
