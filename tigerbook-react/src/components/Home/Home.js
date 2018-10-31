import React, { Component } from 'react';
import LiveFeed from '../LiveFeed/LiveFeed';
import Communities_search from '../Communities_search/Communities_search';
import './Home.css';


class Home extends Component {
	
	render() {
		
		const { onRouteChange, showPostCreate } = this.props;

		return(
			<div className='wrapper'>
				<div className='LiveFeed'>
					<LiveFeed />
				</div>
				<div className='Communities_search'>
					<Communities_search />
				</div>
			</div>
		)
	}	
}

export default Home;