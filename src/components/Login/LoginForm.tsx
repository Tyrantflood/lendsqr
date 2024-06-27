import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "all",
  });

  const onSubmit = (data: LoginFormData) => {
    setLoading(true);
    localStorage.setItem("userData", JSON.stringify(data));

    setTimeout(() => {
      reset();
      navigate("/dashboard/*");
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="login-section">
      <div className="login-header">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter your email",
            })}
          />
          {errors.email && (
            <span role="alert" className="input-error">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
          <div className="input-password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Please enter your password",
              })}
            />
            <p
              className="password-visible"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </p>
          </div>
          {errors.password && (
            <span role="alert" className="input-error">
              {errors.password.message}
            </span>
          )}
        </div>

        <p>FORGOT PASSWORD?</p>

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "LOG IN"}
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
