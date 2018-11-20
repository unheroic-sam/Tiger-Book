import React from 'react';
import { UtilContextConsumer } from '../../context/utilContext';
import './signIn.css';

class signIn extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			signInEmail: '',
			signInPassword: '',
			error: null,
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	};

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	};

	onSubmitSignIn = () => {
		this.props.onRouteChange('home');
	}

	onSubmitSignIn = (utilContext, e = null) => {

		if(e) {
			e.preventDefault();
		}

		this.setState({ error: null });
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => {
				response.json().then((user) => {
					if(response.ok) {
						if(user.id) {
							utilContext.setCurrentUser(user)
							this.props.onRouteChange('home');
						}
					} else {
						this.setState({
							error: user.message
						});
					}
				});
			})
	}

	render(){
		
		const { onRouteChange } = this.props;

		return(
			<UtilContextConsumer>
				{(utilContext) => (
				<form onSubmit={(e) => { this.onSubmitSignIn(utilContext, e) }}>	
				<article className="br5 white mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">	
						<main className="pa4 black frame">
				 			<fieldset id="sign_up" className="ba b--transparent ph0 mh0 whitetest">
				      			<legend className="f4 fw6 ph0 mh0 whitetest">Sign In</legend>
				      			{ this.state.error && <p className="text-danger whitetest">{this.state.error}</p> }
				      			<div className="mt3">
				        			<label className="db fw6 lh-copy f6 whitetest" htmlFor="email-address">Email</label>
				        			<input 
				        				className="pa2 input-reset ba offwhite w-100 whitetest" 
				        				type="email" 
				        				name="email-address"  
				        				id="email-address"
				        				onChange = {this.onEmailChange}
				        			/>
				      			</div>
				      			<div className="mv3">
				       				<label className="db fw6 lh-copy f6 whitetest" htmlFor="password">Password</label>
				       				<input 
				       					className="b pa2 input-reset ba offwhite w-100 whitetest" 
				       					type="password" 
				       					name="password"  
				       					id="password"
				       					onChange = {this.onPasswordChange} 
				       				/>
				      			</div>
				    		</fieldset>
				    		<div className="">
				      		<input
				      			onClick = {() => {
				      				this.onSubmitSignIn(utilContext)
				      			}}
				      			className="whitetest b ph3 pv2 input-reset ba white bg-transparent grow pointer f6 dib" 	
				      			type="submit" 
				      			value="Sign in" 
				      		/>
				    		</div>
				    		<div className="lh-copy mt3 whitetest">
				      		<p onClick={() => onRouteChange('register')} href="#0" className="whitetest f6 link dim white db">Register</p>
				    		</div>
						</main>
				</article>
			</form>
			)}
			</UtilContextConsumer>
		);	
	}
	
}
export default signIn;