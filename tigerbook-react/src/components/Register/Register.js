import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			signInEmail: '',
			signInPassword: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	};

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	};

	onSubmitSignIn = () => {
		this.props.onRouteChange('sign');
	}

	render() {
		const { onRouteChange } = this.props

		return (
			<div>
				<article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">	
						<main className="pa4 black-80">
					 		<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      		<legend className="f4 fw6 ph0 mh0">Register</legend>
					      		<div className="mt3">
					       			<label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
					       			<input 
					       				className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					       				type="email" 
					       				name="email-address"  
					       				id="email-address"
					       				onChange = {this.onNameChange}
					       			/>
				     			</div>
				      			<div className="mt3">
					        		<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        		<input 
					        			className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        			type="email" 
					        			name="email-address"  
					       				id="email-address"
					       				onChange = {this.onEmailChange}
					       			/>
					   			</div>
					     		<div className="mv3">
					       			<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					       			<input 
					       				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					       				type="password" 
					       				name="password"  
					       				id="password"
					       				onChange = {this.onPasswordChange} 
					       			/>
					      		</div>
					    	</fieldset>
					    	<div className="">
					      	<input
					      		className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 	
					      		type="submit" 
					      		value="Register"
					      		onClick={() => onRouteChange('signIn')} 
					      	/>
					    	</div>
					    	<div className="lh-copy mt3">
					      	<p onClick={() => onRouteChange('signIn')} href="#0" className="f6 link dim black db">Sign In</p>
					    	</div>
						</main>
				</article>
			</div>
		)
	}
}

export default Register;