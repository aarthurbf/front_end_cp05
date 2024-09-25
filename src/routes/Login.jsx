import React, { useState } from "react";
import { LoginStyle } from "../css/LoginStyle";
import Google from "../assets/images/google.png";
import Facebook from "../assets/images/facebook.png";

// Função simples para criptografar e descriptografar strings
const encrypt = (text) => {
  return btoa(text);
};

const decrypt = (encryptedText) => {
  return atob(encryptedText);
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  // Função de validação de login
  const handleLogin = (e) => {
    e.preventDefault();

    // Verifica se o email e a senha são 'admin'
    if (email === "admin" && password === "admin") {
      alert("Login bem-sucedido!");

      // Armazena email e senha no sessionStorage
      sessionStorage.setItem("user", encrypt(email));
      sessionStorage.setItem("password", encrypt(password));
      setIsLoggedIn(true);
    } else {
      setError("Usuário ou senha incorretos.");
    }
  };

  // Função para fazer logout
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    setIsLoggedIn(false);
  };

  // Verifica se o usuário já está logado ao carregar o componente
  React.useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <LoginStyle>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            {/* Se estiver logado, mostra a opção de logout */}
            {isLoggedIn ? ( 
              <div className="welcome-container">
                <h2 className="welcome-message">Bem-vindo, {decrypt(sessionStorage.getItem("user"))}!</h2>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
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
                {/* Erro caso esteja errado as credencias */}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="form-link">
                  <a href="#" className="forgot-pass">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="field button-field">
                  <button type="submit">Login</button>
                </div>
              </form>
            )}
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
