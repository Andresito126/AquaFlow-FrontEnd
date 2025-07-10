import './Crateuser.css';
import img from "../../../../core/assets/image21.png";
import image from "../../../../core/assets/hori.png";

const CreateUser = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-left-content">
          <img src={img} alt="AquaFlow" className='img'/>
          <h2>OPTIMIZA EL USO DEL AGUA</h2>
          <p>Monitorea, analiza y reutiliza con inteligencia</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-logo-wrapper">
          <img src={image} className="auth-logo" alt="AquaFlow Logo" />
        </div>

        <div className="auth-box">
          <h2>Create an account</h2>

          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" placeholder="" />

          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" placeholder="" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="" />

          <button>Create account</button>
        </div>
      </div>
    </div>
  )
}

export default CreateUser;