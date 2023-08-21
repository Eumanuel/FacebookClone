import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
          <div className="loginLeft">
              <h3 className="loginLogo">LamaSocial</h3>
              <span className="loginDesc">Conecte com amigos ao redor do mundo!</span>
          </div>
          <div className="loginRight">
              <div className="loginBox">
                  <input type="Email" placeholder="E-mail cadastrado" className="loginInput" />
                  <input type="Password" placeholder="Senha cadastrada" className="loginInput" />
                  <button className="loginButton">Entrar</button>
                  <span className="loginForgot">Esqueci minha senha</span>
                  <button className="loginRegisterButton">Criar uma conta</button>
              </div>
          </div>
      </div>
    </div>
  )
}
