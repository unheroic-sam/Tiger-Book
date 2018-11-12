import React, { createContext } from 'react';

const PostsContext = createContext({});

export class PostsContextProvider extends React.Component {

	state = {
		posts: []
	}

	componentDidMount() {
		this.getAllPosts();
	}

	getAllPosts = () => {
		fetch('http://localhost:3000/getPosts')
			.then(res => res.json())
			.then(posts => this.setState({posts}))
	}

	render() {
		return (
			<PostsContext.Provider
				value={{
					state: this.state,
					getAllPosts: this.getAllPosts
				}}
			>
				{this.props.children}
			</PostsContext.Provider>
		);
	}

}

export const PostsContextConsumer = PostsContext.Consumer;

