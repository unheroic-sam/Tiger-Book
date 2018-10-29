import React from 'react';
import './Navigation.css';

const NavigationBar = ({ onRouteChange, isSignedIn}) => {
	if(isSignedIn === false) {
		return(
<<<<<<< HEAD
			<div className='Not-SignedInNav'>
=======
			<div className='wrapper-nav'>
>>>>>>> e1663822c7fa51f35edfd4a55ea732cdaf98fa84
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
<<<<<<< HEAD
			<div className='SignedInNav'>
				<div className= 'create-post'>
					<h1>Create Post</h1>
				</div>

				<div className='visit-community'>
=======
			<div className='wrapper-nav'>
				<div className='createPost'>
					<h1>Create a Post</h1>
				</div>
				<div className='visitCommunity'>
>>>>>>> e1663822c7fa51f35edfd4a55ea732cdaf98fa84
					<h1>Visit Community</h1>
				</div>
				<div className='account'>
					<h1>Account</h1>
				</div>
<<<<<<< HEAD
				<div className='sign-out'>
					<h1 onClick={() => onRouteChange('signIn')}>Sign Out</h1>
=======
				<div className='signOut'>
					<h1 onClick = {() => onRouteChange('signOut')}>Sign Out</h1>
>>>>>>> e1663822c7fa51f35edfd4a55ea732cdaf98fa84
				</div> 
			</div>
		)
	}
}

export default NavigationBar;