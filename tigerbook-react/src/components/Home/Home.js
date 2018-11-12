import React, { Component } from 'react';
import LiveFeed from '../LiveFeed/LiveFeed';
import Communities_search from '../Communities_search/Communities_search';
import CreatePostBox from '../CreatePostBox/CreatePostBox';
import './Home.css';
import { UtilContextConsumer  } from '../../context/utilContext';
import { PostsContextProvider  } from '../../context/postsContext';


class Home extends Component {
	
	render() {
		return(
			<PostsContextProvider>
				<UtilContextConsumer>
					{(utilContext) => (
						<div>
						{
							utilContext.state.showCreatePostModal
							?<CreatePostBox onRouteChangePost={this.props.onRouteChangePost}/>
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
					)}
				</UtilContextConsumer>
			</PostsContextProvider>
		)
	}	
}

export default Home;