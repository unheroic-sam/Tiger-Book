import React, { Fragment } from 'react';
import { PostsContextConsumer } from '../../context/postsContext';
import { Media } from 'reactstrap';
import './LiveFeed.css';

class LiveFeed extends React.Component {

	render() {
		return (
				<PostsContextConsumer>
				{(postsContext) => (
					<Fragment>
					{
						postsContext.state.posts.map((post, i) => {
						const photourl = (post.user.profile_picture == null)
							? "/images/default_profile_picture.jpg"
							: post.user.profile_picture;
							return (
								<Media className='post-wrapper' key={i}>
								    <Media left href="#">
					        			<Media object src={photourl} alt="" className='profile-picture' />
					      			</Media>
					      			<Media body>
					        			<Media heading className='post-username'>
					          				{post.user.name}
					        			</Media>
					        			<Media heading className='post-title'>
					          				{post.title}
					        			</Media>
					        				<div className='post-text post-content'>
					        					{post.content}
					        				</div>
					      			</Media>
					    		</Media>
							);
						})
					}
				</Fragment>
			)}
			</PostsContextConsumer>
		);
	}
}
export default LiveFeed;