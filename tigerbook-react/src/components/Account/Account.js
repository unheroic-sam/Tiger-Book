import React, { Component, Fragment } from 'react';
import './Account.css';

class Account extends Component {
	
	render(){
		return (
			<Fragment>
				<div className='account-wrapper'>
					<div className='profile-info'>
						<h1>Profile_info</h1>
					</div>
					<div className='account-feed'>
						<h1>Account_feed</h1>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Account;