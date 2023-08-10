import React, { useReducer } from 'react'
import "./RegistrationForm.css"

const UPDATE_FORM = 'UPDATE_FORM';

const initialDetails = {
    email: { value: '', touched: false, hasError: false, error: '' },
    isFormValid: false,
};

const formReducer = (state: any, action: any) => {
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

const validateInput = (name: any, value: any) => {
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
        default:
            break;
    }
    return { hasError, error };
};

const onInputChange = (name: any, value: any, dispatch: any, regDetails: any) => {
    const { hasError, error } = validateInput(name, value);
    dispatch({
        type: UPDATE_FORM,
        data: { name, value, hasError, error, touched: false },
    });
};

const onFocusOut = (name: string, value: any, dispatch: React.Dispatch<any>, regDetails: { [p: string]: any }) => {
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

const handleBlur = (e: any, dispatch: any, regDetails: any) => {
    onFocusOut(e.target.name, e.target.value, dispatch, regDetails);
};




const RegistrationForm: React.FC = () => {

    const [regDetails, dispatch] = useReducer(formReducer, initialDetails)



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("handleSubmit")
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
                    />

                    <label htmlFor="firstName"><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" name="firstName" id="firstName" />

                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter lastName" name="lastName" id="lastName" />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" />
                    <hr />

                    <button type="submit" className="registerbtn">Register</button>
                </div>

            </form>
        </div>
    )
};

export default RegistrationForm;
