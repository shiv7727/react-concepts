import React, { useReducer } from 'react'
import "./RegistrationForm.css"

const initialDetails = {
    email: { value: '', hasError: false, error: '', touched: false }
}

const formReducer = () =>{
    
}



interface props {

}
const RegistrationForm: React.FC<props> = () => {

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
                    <input type="text" placeholder="Enter Email" name="email" id="email" />

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
