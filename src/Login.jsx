import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    // Mock auth success
    onLogin();
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          {isSignup ? "Create Account" : "Login"}
        </button>
      </form>

      <p onClick={() => setIsSignup(!isSignup)} className="link">
        {isSignup ? "Already have an account? Login" : "New user? Sign up"}
      </p>
    </div>
  );
};

export default Login;
