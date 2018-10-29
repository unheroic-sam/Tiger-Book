import React from 'react';
import './Navigation.css';

const NavigationBar = ({ onRouteChange, isSignedIn}) => {
	if(isSignedIn === false) {
		return(
			<div className='SignedInNav'>
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
			<div className='Not-SignedInNav'>
				<div className='col1'>
					<h1>Tiger Book</h1>
				</div>
				<div className='col2'>
					<h1 onClick = {() => onRouteChange('signOut')}>Sign Out</h1>
				</div> 
			</div>
		)
	}
}

export default NavigationBar;