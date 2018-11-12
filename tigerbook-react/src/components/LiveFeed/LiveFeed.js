import React from 'react';
import { PostsContextConsumer } from '../../context/postsContext';

class LiveFeed extends React.Component {

	render() {
		return (
			<PostsContextConsumer>
				{(postsContext) => (
						<div>
							<button onClick={postsContext.getAllPosts}>Refresh</button>
							<div>
								{
									postsContext.state.posts.map((post) => {
										return (
											<h4>{post.title}</h4>
										);
									})
								}
							</div>
						</div>
					)}
			</PostsContextConsumer>
		);
	}

}

export default LiveFeed;