import imagen from "../../../../../core/assets/login.png";
import ima from "../../../../../core/assets/aqua.png";

import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <img src={ima} alt="AquaFlow Logo" className="login-logo" />
          <h2>Sign in</h2>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="" />

          <button>Sign in</button>

          <div className="divider">
            <span>Or sign in with</span>
          </div>

          <p className="signup-text">
            Don't have an account? <a href="/createuser">Sign up</a>
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-right-content">
          <img src={imagen} alt="AquaFlow" className="img" />
          <h2>WELCOME BACK</h2>
          <p>SÉ PARTE DEL CAMBIO HACIA UN FUTURO MÁS RESPONSABLE CON EL AGUA</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
