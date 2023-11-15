import './App.scss';
import { useState } from "react"
import LoginForm from '../LoginForm/LoginForm'
import ErrorMassage from '../ErrorMassage/ErrorMassage'
import * as api from '../../utils/Api'

function App() {

  const [token, setToken] = useState();
  const [isError, setIsError] = useState(false);

  function handlerLogIn({ email, password }) {
    api.authorize(email, password)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setToken(token)
      })
      .catch(err => {
        setIsError(true)
      })
  }

  function closePopup() {
    setIsError(false);
  }


  return (
    <div className="page">
      <LoginForm
        onSubmit={handlerLogIn} />
      <ErrorMassage
        isOpen={isError}
        onClose={closePopup}
      />
    </div>
  );
}

export default App;
