import { LoginStyle } from "../css/LoginStyle";
import Google from "../assets/images/google.png";
import Facebook from "../assets/images/facebook.png";

const Login = () => {
  return (
    <LoginStyle>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Senha"
                  className="password"
                />
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Esqueceu a senha ?
                </a>
              </div>

              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Não tem uma conta ?{" "}
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