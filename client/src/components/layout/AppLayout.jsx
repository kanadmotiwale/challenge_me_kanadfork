import Navbar from "../ui/Navbar/Navbar";
import PropTypes from "prop-types";

export default function AppLayout({ children, user }) {
  return (
    <>
      <Navbar user={user} />
      <div className="container py-4">{children}</div>
    </>
  );
}

AppLayout.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
};
