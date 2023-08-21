import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
          <div className="registerLeft">
              <h3 className="registerLogo">LamaSocial</h3>
              <span className="registerDesc">Conecte com amigos ao redor do mundo!</span>
          </div>
          <div className="registerRight">
              <div className="registerBox">
                  <input type="Email" placeholder="Usuário cadastrado" className="registerInput" />
                  <input type="Email" placeholder="E-mail cadastrado" className="registerInput" />
                  <input type="Email" placeholder="Senha cadastrado" className="registerInput" />
                  <input type="Password" placeholder="Senha cadastrada" className="registerInput" />
                  <button className="registerButton">Criar conta</button>
                  <button className="registerRegisterButton">Logar na sua conta</button>
              </div>
          </div>
      </div>
    </div>
  )
}
