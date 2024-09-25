import React, { useState } from "react";
import { LoginStyle } from "../css/LoginStyle";
import Google from "../assets/images/google.png";
import Facebook from "../assets/images/facebook.png";

const Login = () => {
  // Estados para armazenar email, senha e mensagens de erro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Função de validação de login
  const handleLogin = (e) => {
    e.preventDefault();

    // Verifica se o email e a senha são 'admin'
    if (email === "admin" && password === "admin") {
      alert("Login bem-sucedido!");
      // Aqui você pode redirecionar o usuário para outra página ou realizar outra ação.
    } else {
      setError("Usuário ou senha incorretos.");
    }
  };

  return (
    <LoginStyle>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form onSubmit={handleLogin}>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="Email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Senha"
                  className="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>} {/* Exibe a mensagem de erro */}
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Esqueceu a senha?
                </a>
              </div>

              <div className="field button-field">
                <button type="submit">Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Não tem uma conta?{" "}
                <a href="#" className="link signup-link">
                  Criar
                </a>
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field facebook">
              <span>Login com Facebook</span>
              <img src={Facebook} alt="" className="google-img" />
            </a>
          </div>
          <div className="media-options">
            <a href="#" className="field google">
              <img src={Google} alt="" className="google-img" />
              <span>Login com Google</span>
            </a>
          </div>
        </div>
      </section>
    </LoginStyle>
  );
};

export default Login;
