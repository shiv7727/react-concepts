import { UPDATE_FORM } from './RegistrationForm';

export const validateInput = (name: any, value: any) => {
	const regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

	let hasError: boolean = false;
	let error: string = '';

	switch (name) {
		case 'email':
			if (!regExp.test(value)) {
				hasError = true;
				error = 'Invalid email address !';
			}
			break;
		case 'firstName':
			if (!regExp.test(value)) {
				hasError = true;
				error = 'Invalid email address !';
			}
			break;
		case 'lastName':
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

export const onFocusOut = (
	name: string,
	value: any,
	dispatch: React.Dispatch<any>,
	regDetails: { [p: string]: any },
) => {
	const { hasError, error } = validateInput(name, value);
	let isFormValid = true;
	for (const key in regDetails) {
		const item = regDetails[key];

		if ((key === name && hasError) || (key !== name && item?.hasError)) {
			isFormValid = false;
			break;
		}
	}
	dispatch({
		type: UPDATE_FORM,
		data: { name, value, hasError, error, touched: true, isFormValid },
	});
};
