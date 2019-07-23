import React from 'react';
import { Context, Error, Hint, Rules, Form, Input } from 'react-form-validation';

/**
 * Registration form.
 */
export default class RegisterForm extends React.Component {
	/**
	 * Constructor.
	 */

  handleSubmit(e) {
    alert('Submitted');
    e.preventDefault();
  }
	constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			context: new Context({
				fields: {
					username: Rules.required().regex(/^[a-z0-9_]+$/,
						'Should only contain letters, numbers and _.'),
					email: Rules.required('This is overriden').email(),
					password: Rules.required().password(),
					confirmPassword: Rules.equals('password'),
					birthDate: Rules.required().noError(),
					terms: Rules.required('You have to accept the terms of service')
				}
			})
		};
	}

	/**
	 * Renders the form.
	 */
	render() {
		return (
			<Form context={this.state.context}
				  onSubmit={this.handleSubmit}
				  preventSubmit={true}
				  scrollToErrorPadding={70}>
				<h4>Registration Form</h4>
				<div className="field">
					Username: <Input type="text" name="username" />
					<Error htmlFor="username" />
					<Hint htmlFor="username"
						text="Only letters, numbers or _ is allowed" />
				</div>
				<div className="field">
					Email: <Input type="text" name="email" />
					<Error htmlFor="email" />
				</div>
				<div className="field">
					Password: <Input type="password" name="password" />
					<Error htmlFor="password" />
					<Hint htmlFor="password"
						text="At least 8 characters, one uppercase, one lowercase and one number" />
				</div>
				<div className="field">
					Confirm Password: <Input type="password" name="confirmPassword" />
					<Error htmlFor="confirmPassword" />
				</div>
				
				<div className="field">
					<Input type="checkbox" name="terms" id="terms" />
					<label htmlFor="terms"> I accept the terms of service </label>
					<Error htmlFor="terms" />
				</div>
				<div className="actions">
					<button>Register</button>
          <input type="submit" value="Show"/>
					
				</div>
			</Form>
		);
	}
}