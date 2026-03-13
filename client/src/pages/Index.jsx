import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: POST /api/users/login
    console.log(email, password)
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: GET /api/users
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ width: "100%", }
    }>
      < div className="card shadow-sm" style={{ minWidth: "720px" }
      }>
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Challenge Me</h2>

          <ul className="nav nav-tabs mb-4">
            <li className="nav-item w-50 text-center">
              <button
                className={`nav-link w-100 ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Log in
              </button>
            </li>
            <li className="nav-item w-50 text-center">
              <button
                className={`nav-link w-100 ${activeTab === "register" ? "active" : ""}`}
                onClick={() => setActiveTab("register")}
              >
                Sign up
              </button>
            </li>
          </ul>

          {activeTab === "login" ? (
            <form id="login-form" onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>

                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Log in
              </button>
            </form>
          ) : (
            <form id="register-form" onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">username</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" maxLength={2} placeholder="MA" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" required />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Create account
              </button>
            </form>
          )}
        </div>
      </div >
    </div >
  );
}
