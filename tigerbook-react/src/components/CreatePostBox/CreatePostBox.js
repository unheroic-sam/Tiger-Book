import React, { Component } from 'react';
import './CreatePostBox.css';

class CreatePostBox extends Component {
	render() {
	const { onRouteChangePost } = this.props;
		return(
			<div className='post-box-wrapper'> 
				<p>Create a post</p>
				<div className="lh-copy mt3">
					<p onClick={() => onRouteChangePost('closePostBox')} href="#0" className="f6 link dim black db">Close</p>
				</div>
			</div>
		)
	}
}

export default CreatePostBox;