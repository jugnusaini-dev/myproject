import "./login.css";

function Login({ setShowLogin }) {
    
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>Login to your account</p>

        <form>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/forgot-password">
              Forgot Password?
            </a>

          </div>

          <button type="submit" onClick={() => setShowLogin(false)} >
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>

    </div>
  );
}

export default Login;