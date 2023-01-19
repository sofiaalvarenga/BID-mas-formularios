import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import FormData from './components/FormData';

const App = () =>{
  const [state, setState] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    cpassword : ""
  });

  return (
    <div className="user-form">
      <Form inputs={state} setInputs={setState}></Form>
      <FormData data={state}></FormData>
    </div>
  );
}

export default App;
