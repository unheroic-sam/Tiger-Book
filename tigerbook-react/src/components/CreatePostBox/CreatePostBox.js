import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreatePostBox.css';
import { UtilContextConsumer  } from '../../context/utilContext';
//import './CreatePostBox.css';


class CreatePostBox extends Component {
	render() {
	const { onRouteChangePost } = this.props;

		return(
			<UtilContextConsumer>
			 {(utilContext) => (
		 		<div className='post-box-wrapper'> 
					<p>Create a post</p>
					<div className="lh-copy mt3">
						<p onClick={utilContext.toggleCreatePostModal} href="#0" className="f6 link dim black db">Close</p>
					</div>
				</div>
			 )}
			</UtilContextConsumer>
		)
	}
}

CreatePostBox.propTypes = {
	onRouteChangePost: PropTypes.func
}
export default CreatePostBox;