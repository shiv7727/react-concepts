import React, { useReducer } from 'react';
import { onInputChange, onFocusOut, validateInput } from './formUtils';
import './App.css';

export const UPDATE_FORM = 'UPDATE_FORM';

const initialDetails = {
	email: { value: '', touched: false, hasError: false, error: '' },
	firstName: { value: '', touched: false, hasError: false, error: '' },
	lastName: { value: '', touched: false, hasError: false, error: '' },
	password: { value: '', touched: false, hasError: false, error: '' },
	isFormValid: false,
};

const formReducer = (state, action) => {
	if (action.type === UPDATE_FORM) {
		const { name, value, hasError, error, touched, isFormValid } = action.data;
		return {
			...state,
			[name]: { ...state[name], value, hasError, error, touched },
			isFormValid,
		};
	} else {
		return state;
	}
};

const handleBlur = (e, dispatch, formState) => {
	onFocusOut(e.target.name, e.target.value, dispatch, formState);
};

function App() {
	const [regDetails, dispatch] = useReducer(formReducer, initialDetails);

	const handleSubmit = (e) => {
		e.preventDefault();
		let isFormValid = true;

		for (const name in regDetails) {
			const item = regDetails[name];
			const value = item;
			const { hasError, error } = validateInput(name, value, regDetails);

			if (hasError) {
				isFormValid = false;
			}
			if (name) {
				dispatch({
					type: UPDATE_FORM,
					data: { name, value, hasError, error, touched: true, isFormValid },
				});
			}
		}
		if (!isFormValid) {
			return;
		}
	};

	// console.log('regDetails', regDetails);

	return (
		<div className='App'>
			<h1>UseReducer form</h1>
			<form onSubmit={handleSubmit}>
				<div class='container'>
					<h1>Register</h1>
					<p>Please fill in this form to create an account.</p>
					<hr />

					<label for='email'>
						<b>Email</b>
					</label>
					<input
						type='text'
						placeholder='Enter Email'
						name='email'
						id='email'
						onChange={(e) => {
							onInputChange(
								e.target.name,
								e.target.value,
								dispatch,
								regDetails,
							);
						}}
						onBlur={(e) => {
							handleBlur(e, dispatch, regDetails);
						}}
					/>
					{regDetails.email.hasError && (
						<p className='error'>{regDetails.email.error}</p>
					)}
					<label for='firstName'>
						<b>First Name</b>
					</label>
					<input
						type='text'
						placeholder='Enter First Name'
						name='firstName'
						id='firstName'
						onChange={(e) => {
							onInputChange(
								e.target.name,
								e.target.value,
								dispatch,
								regDetails,
							);
						}}
						onBlur={(e) => {
							handleBlur(e, dispatch, regDetails);
						}}
					/>
					{regDetails.firstName.hasError && (
						<p className='error'>{regDetails.firstName.error}</p>
					)}
					<label for='lastName'>
						<b>last Name</b>
					</label>
					<input
						type='text'
						placeholder='Enter Last Name'
						name='lastName'
						id='lastName'
						onChange={(e) => {
							onInputChange(
								e.target.name,
								e.target.value,
								dispatch,
								regDetails,
							);
						}}
						onBlur={(e) => {
							handleBlur(e, dispatch, regDetails);
						}}
					/>
					{regDetails.lastName.hasError && (
						<p className='error'>{regDetails.lastName.error}</p>
					)}

					<label for='psw'>
						<b>Password</b>
					</label>
					<input
						type='password'
						placeholder='Enter Password'
						name='password'
						id='psw'
					/>

					<hr />

					<button type='submit' class='registerbtn'>
						Register
					</button>
				</div>
			</form>
		</div>
	);
}

export default App;
