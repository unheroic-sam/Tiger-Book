import React, { Component, Fragment } from 'react';
import './Account.css';
import { Media } from 'reactstrap';
import Scroll from '../Scroll/Scroll';

class Account extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		const user = this.props.user;

		fetch(`http://localhost:3000/getPosts?user_id=${user.id}`)
			.then(res => res.json())
			.then(posts => this.setState({posts}))
	}
	
	render() {
		return (
			<Fragment>
				<div className='account-wrapper'>
					<div className='profile-info'>
						<h1>Profile_info</h1>
					</div>
					<Scroll>
					<div className='account-feed'>
					{
						this.state.posts.map((post, i) => {
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
					</div>
					</Scroll>
				</div>
			</Fragment>
		)
	}
}

export default Account;