import './Login.css';
import ImgLogin from '../../../../../core/assets/icons/login-register/login.png';
import { observer } from "mobx-react-lite";
import { UserLoginViewModel } from "../../ViewModels/UserLoginViewModel";
import { useUserLoginLogic } from "../../ViewModels/useUserLoginLogic";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const viewModel = new UserLoginViewModel();

const Login = observer(() => {
  const { handleSubmit, showSuccess } = useUserLoginLogic(viewModel);
  const navigate = useNavigate();


  useEffect(() => {
    if (showSuccess) {
      const timeout = setTimeout(() => {
        navigate("/dashboard"); 
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccess, navigate]);

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">

                
          {(showSuccess || viewModel.error) && (
            <div
              className={`alert-bar ${showSuccess ? "success" : "error"}`}
            >
              {showSuccess
                ? "Inicio de sesión exitoso."
                : viewModel.error}
            </div>
          )}

          <h2>Iniciar sesión</h2>


          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={viewModel.email}
              onChange={(e) => viewModel.onChangeEmail(e.target.value)}
              disabled={viewModel.isSubmitting}
            />

            <label>Contraseña</label>
            <input
              type="password"
              value={viewModel.password}
              onChange={(e) => viewModel.onChangePassword(e.target.value)}
              disabled={viewModel.isSubmitting}
            />

            <button type="submit" disabled={viewModel.isSubmitting}>
              {viewModel.isSubmitting ? "Entrando..." : "Iniciar sesión"}
            </button>
          </form>

          <div className="divider">
            <span>O inicia con</span>
          </div>

          <p className="signup-text">
            ¿No tienes cuenta? <a href="/createuser">Regístrate</a>
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-right-content">
          <img src={ImgLogin} alt="AquaFlow Logo" className="login-logo" />
          <h2>BIENVENIDO DE NUEVO</h2>
          <p>SÉ PARTE DEL CAMBIO HACIA UN FUTURO MÁS RESPONSABLE CON EL AGUA</p>
        </div>
      </div>
    </div>
  );
});

export default Login;
