import React, { useReducer } from 'react';
import './App.css';

const UPDATE_FORM = 'UPDATE_FORM';

const initialDetails = {
	email: { value: '', touched: false, hasError: false, error: '' },
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

const validateInput = (name, value) => {
	const regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

	let hasError = false;
	let error = '';

	switch (name) {
		case 'email':
			if (!regExp.test(value)) {
				hasError = true;
				error = 'Invalid email address !';
			}
			break;
		default:
			break;
	}
	return { hasError, error };
};

const onInputChange = (name, value, dispatch, regDetails) => {
	const { hasError, error } = validateInput(name, value);
	dispatch({
		type: UPDATE_FORM,
		data: { name, value, hasError, error, touched: false },
	});
};

const onFocusOut = (name, value, dispatch, regDetails) => {
	const { hasError, error } = validateInput(name, value);
	let isFormValid = true;
	for (const key in regDetails) {
		const item = regDetails[key];
		if ((key === name && hasError) || (key !== name && item.hasError)) {
			isFormValid = false;
			break;
		}

		dispatch({
			type: UPDATE_FORM,
			data: { name, value, hasError, error, touched: true, isFormValid },
		});
	}
};

const handleBlur = (e, dispatch, regDetails) => {
	onFocusOut(e.target.name, e.target.value, dispatch, regDetails);
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

					<label for='psw'>
						<b>Password</b>
					</label>
					<input
						type='password'
						placeholder='Enter Password'
						name='psw'
						id='psw'
					/>

					<label for='psw-repeat'>
						<b>Repeat Password</b>
					</label>
					<input
						type='password'
						placeholder='Repeat Password'
						name='psw-repeat'
						id='psw-repeat'
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
