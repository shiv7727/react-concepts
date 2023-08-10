import { UPDATE_FORM } from "./RegistrationForm";

export const formReducer = (state: any, action: any) => {
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
