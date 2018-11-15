import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		// <div className='center'>
			<div className='scroll-box'>
				{props.children}
			</div>
		// </div>
	)
}

export default Scroll;