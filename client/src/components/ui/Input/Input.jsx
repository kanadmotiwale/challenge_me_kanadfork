import "./Card.css";
import PropTypes from "prop-types";

export default function Card({
  children,
  interactive = false,
  selected = false,
  variant = "default", // default | soft | ghost
}) {
  return (
    <div
      className={`
        card 
        card-${variant}
        ${interactive ? "card-hover" : ""}
        ${selected ? "card-selected" : ""}
      `}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  interactive: PropTypes.bool,
  selected: PropTypes.bool,
  variant: PropTypes.any,
};
