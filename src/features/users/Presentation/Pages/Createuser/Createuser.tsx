import './Crateuser.css';
import ImgRegister from "../../../../../core/assets/icons/login-register/image21.png";
import ImageLogoShort from "../../../../../core/assets/icons/login-register/hori.png";
import { observer } from "mobx-react-lite";
import { UserViewModel } from "../../ViewModels/UserViewModel";
import { useUserFormLogic } from "../../ViewModels/useUserFormLogic";

const viewModel = new UserViewModel();

const CreateUser = observer(() => {
  const { handleSubmit, showSuccessMessage } = useUserFormLogic(viewModel);

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-left-content">
          <img src={ImgRegister} alt="AquaFlow" className="img" />
          <h2>OPTIMIZA EL USO DEL AGUA</h2>
          <p>Monitorea, analiza y reutiliza con inteligencia</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-logo-wrapper">
          <img src={ImageLogoShort} className="auth-logo" alt="AquaFlow Logo" />
        </div>

        <div className="auth-box">

          {/* Alerta integrada como franja superior */}
          {(showSuccessMessage || viewModel.error) && (
            <div className={`alert-bar ${showSuccessMessage ? 'success' : 'error'}`}>
              {showSuccessMessage
                ? "¡Usuario registrado exitosamente!"
                : viewModel.error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <h2>Crear una cuenta</h2>

            <label>Nombre</label>
            <input
              type="text"
              value={viewModel.firstName}
              onChange={(e) => viewModel.onChangeFirstName(e.target.value)}
            />

            <label>Apellido paterno</label>
            <input
              type="text"
              value={viewModel.lastName1}
              onChange={(e) => viewModel.onChangeLastName1(e.target.value)}
            />

            <label>Apellido materno</label>
            <input
              type="text"
              value={viewModel.lastName2}
              onChange={(e) => viewModel.onChangeLastName2(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              value={viewModel.email}
              onChange={(e) => viewModel.onChangeEmail(e.target.value)}
            />

            <label>Contraseña</label>
            <input
              type="password"
              value={viewModel.password}
              onChange={(e) => viewModel.onChangePassword(e.target.value)}
            />

            <label>Confirmar contraseña</label>
            <input
              type="password"
              value={viewModel.confirmPassword}
              onChange={(e) => viewModel.onChangeConfirmPassword(e.target.value)}
            />

            <label>Tipo de usuario</label>
            <select
              className="select-role"
              value={viewModel.userRole}
              onChange={(e) => viewModel.onChangeUserRole(e.target.value)}
            >
              <option value="Regular user">Usuario regular</option>
              <option value="Administrator">Administrador</option>
            </select>

            <button type="submit" disabled={viewModel.isSubmitting}>
              {viewModel.isSubmitting ? "Registrando..." : "Crear cuenta"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default CreateUser;
