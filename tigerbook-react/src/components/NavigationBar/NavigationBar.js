import React from 'react';
import './Navigation.css';

const NavigationBar = ({ onRouteChange, isSignedIn}) => {
	if(isSignedIn === false) {
		return(
			<div className='Not-SignedInNav'>
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
			<div className='SignedInNav'>
				<div className= 'create-post'>
					<h1>Create Post</h1>
				</div>

				<div className='visit-community'>
					<h1>Visit Community</h1>
				</div>
				<div className='account'>
					<h1>Account</h1>
				</div>
				<div className='sign-out'>
					<h1 onClick={() => onRouteChange('signIn')}>Sign Out</h1>
				</div> 
			</div>
		)
	}
}

export default NavigationBar;