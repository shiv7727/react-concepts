import React, { useReducer } from 'react'
import "./RegistrationForm.css"
import { formReducer } from './formReducer';
import { onFocusOut, validateInput } from './formUtils';

export const UPDATE_FORM = 'UPDATE_FORM';

const initialDetails = {
    email: { value: '', touched: false, hasError: false, error: '' },
    firstName: { value: '', touched: false, hasError: false, error: '' },
    lastName: { value: '', touched: false, hasError: false, error: '' },
    isFormValid: false,
};


const onInputChange = (name: any, value: any, dispatch: any, regDetails: any) => {
    const { hasError, error } = validateInput(name, value);
    dispatch({
        type: UPDATE_FORM,
        data: { name, value, hasError, error, touched: false },
    });
};


const handleBlur = (e: any, dispatch: any, regDetails: any) => {
    onFocusOut(e.target.name, e.target.value, dispatch, regDetails);
};




const RegistrationForm: React.FC = () => {

    const [regDetails, dispatch] = useReducer(formReducer, initialDetails)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let isFormValid = true;

        for (const name in regDetails) {
            const item = regDetails[name];
            const value = item;
            const { hasError, error } = validateInput(name, value);

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
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this htmlForm to create an account.</p>
                    <hr />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email"
                        onChange={(e) => onInputChange(e.target.name, e.target.value, dispatch, regDetails)}
                        onBlur={(e) => handleBlur(e, dispatch, regDetails)}
                        className={regDetails.email.hasError && "inputError"}
                    />
                    {
                        regDetails.email.hasError && <span className="error">{regDetails.email.error}</span>
                    }

                    <label htmlFor="firstName"><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" name="firstName" id="firstName"
                        className={regDetails.firstName.hasError && "inputError"}
                        onChange={(e) => onInputChange(e.target.name, e.target.value, dispatch, regDetails)}
                        onBlur={(e) => handleBlur(e, dispatch, regDetails)}
                    />

                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter lastName" name="lastName" id="lastName"
                        className={regDetails.lastName.hasError && "inputError"}

                        onChange={(e) => onInputChange(e.target.name, e.target.value, dispatch, regDetails)}
                        onBlur={(e) => handleBlur(e, dispatch, regDetails)}
                    />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw"
                        onChange={(e) => onInputChange(e.target.name, e.target.value, dispatch, regDetails)}
                        onBlur={(e) => handleBlur(e, dispatch, regDetails)}
                    />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat"
                        onChange={(e) => onInputChange(e.target.name, e.target.value, dispatch, regDetails)}
                        onBlur={(e) => handleBlur(e, dispatch, regDetails)}
                    />
                    <hr />

                    <button type="submit" className="registerbtn">Register</button>
                </div>

            </form>
        </div>
    )
};

export default RegistrationForm;
