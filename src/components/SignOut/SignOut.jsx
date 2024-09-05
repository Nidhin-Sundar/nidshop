import { useNavigate } from "react-router-dom";

const Signout = ({ onSignout }) => {
  const navigate = useNavigate();

  const handleSignout = () => {
    // Clear authentication data
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");

    // Call the onSignout callback to update the Navbar state
    onSignout();

    // Redirect to login page
    navigate("/");
  };

  return (
    <button
      onClick={handleSignout}
      className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      Sign Out
    </button>
  );
};

export default Signout;
