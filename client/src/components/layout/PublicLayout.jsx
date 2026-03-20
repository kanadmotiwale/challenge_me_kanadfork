import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import PropTypes from "prop-types";

export default function PublicLayout({ children }) {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/feed" replace />;
  }

  return children;
}

PublicLayout.propTypes = {
  children: PropTypes.node,
};
