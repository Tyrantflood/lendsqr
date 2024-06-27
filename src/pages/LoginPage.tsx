import "../styles/login.scss";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <div className="login">
      <div className="login-logo">
        <img src="/images/logo.svg" alt="logo" className="logo" />
        <div>
          <img src="/images/login-illus.svg" alt="illustration" />
        </div>
      </div>
      <div className="login-form">
        <img src="/images/logo.svg" alt="logo" className="logo" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
