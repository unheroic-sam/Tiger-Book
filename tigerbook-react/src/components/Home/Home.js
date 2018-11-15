import React, { Component, Fragment } from 'react';
import LiveFeed from '../LiveFeed/LiveFeed';
import Communities_search from '../Communities_search/Communities_search';
import CreatePostBox from '../CreatePostBox/CreatePostBox';
import './Home.css';
import { UtilContextConsumer  } from '../../context/utilContext';
import { PostsContextProvider  } from '../../context/postsContext';
import { PostsContextConsumer } from '../../context/postsContext';
import Scroll from '../Scroll/Scroll';

class Home extends Component {
	
	render() {
		return(
			<PostsContextProvider>
				<PostsContextConsumer>
				{(postsContext) => (
						<UtilContextConsumer>
											{(utilContext) => (
												<Fragment>
												{
													utilContext.state.showCreatePostModal
													?<CreatePostBox onRouteChangePost={this.props.onRouteChangePost}/>
													:null
												}
												
													<div className='wrapper'>
														<div className='LiveFeed'>
															<div className="LiveFeedNav">
																<button onClick={postsContext.getAllPosts}>Refresh</button>
															</div>
															<Scroll>
																<LiveFeed />
															</Scroll>
														</div>
														<div className='Communities_search'>
															<Communities_search />
														</div>
													</div>
													
											</Fragment>
											)}
										</UtilContextConsumer>
				)}
				</PostsContextConsumer>
				
			</PostsContextProvider>
		)
	}	
}

export default Home;