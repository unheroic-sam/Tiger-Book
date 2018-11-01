import React from 'react';
import './Navigation.css';
import { UtilContextConsumer  } from '../../context/utilContext';

const NavigationBar = ({ onRouteChange, isSignedIn, onRouteChangePost }) => {
	if(isSignedIn === false) {
		return(
			<div className='wrapper-nav'>
				<div className = 'title'>
					<h1>Tiger Book</h1>
				</div>
				<div className='home'>
					<h1 onClick = {() => onRouteChange('home')}>home</h1>
				</div>
			</div>
		)
	} else {
		return (
			<UtilContextConsumer>
			{(utilContext) => (
				<div className='wrapper-nav'>
					<div className= 'createPost'>
						<h1 onClick = {utilContext.toggleCreatePostModal}>Create Post</h1>
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
			)}
			</UtilContextConsumer>
		)
	}
}
export default NavigationBar;
