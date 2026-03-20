import "./Modal.css";
import PropTypes from "prop-types";

export default function Modal({ title, children, onClose, footer }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        {title && (
          <div className="modal-local-header">
            <h3>{title}</h3>

            <div className="modal-close" onClick={onClose}>
              ✕
            </div>
          </div>
        )}

        {/* BODY */}
        <div className="modal-body">{children}</div>

        {/* FOOTER */}
        {footer && <div className="modal-local-footer">{footer}</div>}
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  footer: PropTypes.node,
};
