import React from 'react';
import './Navigation.css';
import { UtilContextConsumer  } from '../../context/utilContext';

const NavigationBar = ({ onRouteChange, isSignedIn, onRouteChangePost, displayAccountPage, route }) => {
	if(isSignedIn === false) {
		return(
			<div className='wrapper-nav'>
				<div className = 'title'>
					<h1>TIGER BOOK</h1>
				</div>
				{/*<div className='col2'>
				  	<h1 onClick = {() => onRouteChange('home')}>home</h1>
				</div>*/}
			</div>
		)
	} else {
		if(route === 'Account') {
			return(
				<div className='wrapper-nav'>
					<div className= 'createPost'>
						<h1 onClick = {() => onRouteChange('home')}>Home</h1>
					</div>
					<div className='visitCommunity'>
						<h1 onClick={() => onRouteChange('signOut')}>Sign Out</h1>
					</div>
				</div>
			)
		}
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
						<h1 onClick={() => onRouteChange('Account')}>Account</h1>
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
