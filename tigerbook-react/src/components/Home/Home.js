import React, { Component } from 'react';
import LiveFeed from '../LiveFeed/LiveFeed';
import Communities_search from '../Communities_search/Communities_search';
import CreatePostBox from '../CreatePostBox/CreatePostBox';
import './Home.css';


class Home extends Component {
	
	render() {
		const { showPostCreate } = this.props;
		return(
			<div>
				{
					showPostCreate
					?<CreatePostBox />
					:null
				}
				
					<div className='wrapper'>
						<div className='LiveFeed'>
							<LiveFeed />
						</div>
						<div className='Communities_search'>
							<Communities_search />
						</div>
					</div>
			</div>
		)
	}	
}

export default Home;