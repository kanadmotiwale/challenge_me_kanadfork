import { Navigate } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";
import { useUser } from "../../context/UserContext";
import PropTypes from "prop-types";

export default function PrivateLayout({ children }) {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar user={user} />
      <div className="container py-4">{children}</div>
    </>
  );
}

PrivateLayout.propTypes = {
  children: PropTypes.node,
};
