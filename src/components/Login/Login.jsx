import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const mockUser = {
    email: "n@gmail.com",
    password: "password123",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === mockUser.email && password === mockUser.password) {
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Image on the left */}
      <div className="w-1/2">
        <img
          src="/src/assets/logo/Nid1.jpeg"
          alt="Login"
          className="object-fit h-full w-full"
        />
      </div>

      {/* Form on the right */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
