import "./Badge.css";
import PropTypes from "prop-types";

export default function Badge({
  children,
  variant = "default", // default | primary | soft | success | progress | complete
}) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};
