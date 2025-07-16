// src/Presentation/Pages/Login.tsx
import './Login.css';
import ImgLogin from '../../../../../core/assets/icons/login-register/login.png';
import { observer } from "mobx-react-lite";
import { UserLoginViewModel } from "../../ViewModels/UserLoginViewModel";
import { useUserLoginLogic } from "../../ViewModels/useUserLoginLogic";

const viewModel = new UserLoginViewModel();

const Login = observer(() => {
  const { handleSubmit, showSuccess } = useUserLoginLogic(viewModel);

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h2>Iniciar sesión</h2>

          {showSuccess && <div className="success-alert">Inicio de sesión exitoso.</div>}
          {viewModel.error && <div className="error-message">{viewModel.error}</div>}

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
