import React from 'react';

const FormData = (props) => {
    const {lastName, firstName, email, password, cpassword} = props.data;
    return (
    <div className='form-data'>
        <h4>Your Form Data...</h4>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirmed Password: {cpassword}</p>
    </div>
    )
};
export default FormData;
