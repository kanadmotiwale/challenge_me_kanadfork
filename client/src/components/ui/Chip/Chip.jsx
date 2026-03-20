import "./Chip.css";
import PropTypes from "prop-types";

export default function Chip({ label, active = false, onClick }) {
  return (
    <div className={`chip ${active ? "chip-active" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
}

Chip.propTypes = {
  label: PropTypes.any,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
