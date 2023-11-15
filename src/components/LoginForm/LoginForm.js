import './LoginForm.scss'

import useForm from "../../utils/useForm"

export default function Login({ onSubmit }) {

  const  {form, handleChange, errors} = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form)
  }

  return (
    <div className={"login"}>
      <div className="login__container">
        <h2 className="login__title">Вход</h2>
        <form className="login__form" name='Login' onSubmit={handleSubmit} >
          <fieldset className="login__fieldset">
            <div className="login__field">
              <input
                id="email-input"
                className="login__input login__input_email"
                type="email"
                placeholder="Email"
                name="email"
                minLength="2"
                maxLength="40"
                value={form.email}
                onChange={handleChange}
                required />
                <span className="login__input-error">{errors.email}</span>
            </div>
            <div className="login__field">
              <input
                id="password-input"
                className="login__input login__input_passward"
                type="password"
                placeholder="Пароль"
                name="password"
                minLength="2"
                maxLength="200"
                value={form.password}
                onChange={handleChange}
                required />
                <span className="login__input-error">{errors.password}</span>
            </div>
            <button className="login__submit-button" type="submit" name="loginSubmit">Login</button>
          </fieldset>
        </form>
      </div>
    </div >
  )
}
