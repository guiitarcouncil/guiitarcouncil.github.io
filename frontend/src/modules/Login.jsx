import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const data = { email, password };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/login/",
        data
      );
      console.log("Response:", response.data);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);

      navigate("/dashboard");
    } catch (err) {
      console.error("Error:", err.response?.data);
      setError(err.response?.data?.error || "Login failed.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {user ? (
          <div>
            <h2>
              Welcome, {user.email} ({user.role})
            </h2>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="login-title">
              {isLogin ? "Login" : "Create Account"}
            </h2>

            {error && <p className="error-message">{error}</p>}

            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="login-input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {!isLogin && (
                <input
                  type="text"
                  placeholder="Phone"
                  className="login-input-field"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              )}

              <input
                type="password"
                placeholder="Password"
                className="login-input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="login-submit-button">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <p className="login-toggle-text">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                className="login-toggle-link"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Create Account" : "Login"}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
