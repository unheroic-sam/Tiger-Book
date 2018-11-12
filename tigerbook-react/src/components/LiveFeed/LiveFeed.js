import React from 'react';
import { PostsContextConsumer } from '../../context/postsContext';

class LiveFeed extends React.Component {

	render() {
		return (
			<PostsContextConsumer>
				{(postsContext) => (
						<div>
							<div>
								{
									postsContext.state.posts.map((post) => {
										return (
											<div>
												<h4>Tittle: {post.title}</h4>
												<h5>Content: {post.content}</h5>
												<h6>User: {post.name}</h6>
											</div>
										);
									})
								}
								<button onClick={postsContext.getAllPosts}>Refresh</button>
							</div>
						</div>
					)}
			</PostsContextConsumer>
		);
	}

}

export default LiveFeed;