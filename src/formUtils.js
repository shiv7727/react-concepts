import { UPDATE_FORM } from './App';

export const validateInput = (name, value) => {
	const regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

	let hasError = false;
	let error = '';

	switch (name) {
		case 'email':
			if (!value?.length) {
				hasError = true;
				error = "Email can't be empty ";
			} else if (!regExp.test(value)) {
				hasError = true;
				error = 'Invalid email address !';
			}
			break;
		case 'firstName':
			if (!value?.length) {
				hasError = true;
				error = 'First name Can not be Empty';
			}
			break;
		case 'lastName':
			if (!value?.length) {
				hasError = true;
				error = 'Last name Can not be Empty';
			}
			break;
		default:
			break;
	}
	return { hasError, error };
};

export const onFocusOut = (name, value, dispatch, formState) => {
	const { hasError, error } = validateInput(name, value);
	let isFormValid = true;
	for (const key in formState) {
		const item = formState[key];
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

export const onInputChange = (name, value, dispatch, formState) => {
	const { hasError, error } = validateInput(name, value);
	dispatch({
		type: UPDATE_FORM,
		data: { name, value, hasError, error, touched: false },
	});
};
