import React from 'react';
import {useState} from 'react';
    
const Form = (props) => {
    const {inputs, setInputs} = props;
    const [error, setError] = useState({
        firstNameErr: '',
        lastNameErr:'',
        emailErr:'',
        passwordErr:'',
        cpasswordErr:'',
    });
    const {firstNameErr, lastNameErr, emailErr, passwordErr, cpasswordErr} = error;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

//FUNCIÓN PARA VER INPUTS EN TIEMPO REAL
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    //Validación de los inputs ingresados
        if(e.target.name==="firstName" && e.target.value.length <3) {
            setError({
                ...error,
                firstNameErr: "El campo debe tener al menos 2 caracteres"});
        }
        else if(e.target.name==="lastName" && e.target.value.length <3) {
            setError({
                ...error,
                lastNameErr: "El campo debe tener al menos 2 caracteres"});
        }
        else if (e.target.name==="email" && e.target.value.length <6){
            setError({
                ...error,
                emailErr: "El campo debe tener al menos 5 caracteres"});
        } 
        else if (e.target.name==="password" && e.target.value.length <9){
            setError({
                ...error,
                passwordErr: "El campo debe tener al menos 8 caracteres"});
        } 
        else if (e.target.name==="cpassword" && (inputs.password !== e.target.value)){
            setError({
                ...error,
                cpasswordErr: 'Las contraseñas deben ser iguales!'})
        }  else {
            setError('');
        }
    //Validación del input vacio
        if((e.target.name==="firstName" || e.target.name==="lastName" ||
        e.target.name==="email" || e.target.name==="password") && e.target.value.length===0) {
            setError({
                error: {
                firstNameErr: '',
                lastNameErr:'',
                emailErr: '',
                passwordErr:''
            }
            });
        }
    };

    //MENSAJE LUEGO DE SUBMIT Y EVITAR COMPORTAMIENTO DEFAULT DEL FORM.
    const createUser = (e) => {
        e.preventDefault();
        const newUser = inputs;
        console.log("Bienvenido", newUser);
        setHasBeenSubmitted(true); //Por defecto, hasBeenSubmittedes false
    }; 
    const formMessage = () => {
        if(hasBeenSubmitted) {
            return "Gracias por registrarte!";
        } else {
            return "Por favor completa el formulario";
        }
    };

    return(
        <form onSubmit={createUser}>
            <h5> {formMessage()} </h5> 
            <div className='data'>
                <label htmlFor='fistName'>First Name </label>
                <input type="text" onChange={onChange} name='firstName'/>
            </div>
            { firstNameErr ?
                    <p style={{color:'red', fontSize:'small'}}>{firstNameErr }</p> : ''
                }
            <div className='data'>
                <label htmlFor='lastName'>Last Name </label>
                <input type="text" onChange={onChange} name ='lastName' /> 
            </div>
            { lastNameErr ?
                    <p style={{color:'red', fontSize:'small'}}>{ lastNameErr }</p> : ''
                }
            <div className='data'>
                <label htmlFor='email'>Email </label> 
                <input type="text" onChange={onChange} name ='email'  />
            </div>
            { emailErr ?
                    <p style={{color:'red', fontSize:'small'}}>{ emailErr }</p> : ''
                }
            <div className='data'>
                <label htmlFor='password'>Password </label>
                <input type="password" onChange={onChange}  name='password' />   
            </div>
            { passwordErr ?
                    <p style={{color:'red', fontSize:'small'}}>{ passwordErr }</p> : ''
                }
            <div className='data'>
                <label htmlFor='cpassword'> Confirm Password </label>
                <input type="password" onChange={onChange} name= 'cpassword'  />
            </div>
            { cpasswordErr ?
                    <p style={{color:'red', fontSize:'small'}}>{ cpasswordErr}</p> : ''
                }
            <div className='submit'>
                <input type="submit" value="Crear Usuario" on/>
            </div>
        </form>
    );
};
export default Form;
