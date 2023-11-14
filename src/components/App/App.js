import './App.scss';
import { useState } from "react"
import LoginForm from '../LoginForm/LoginForm'
import * as api from '../../utils/Api'

function App() {

  const [token, setToken] = useState(); //State for token

  function handlerLogIn({ email, password }) {
    api.authorize(email, password)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setToken(token)
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className="page">
      <LoginForm
      onSubmit={handlerLogIn}/>
    </div>
  );
}

export default App;
