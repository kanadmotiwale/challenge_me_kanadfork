import "./Modal.css";
import Button from "../Button/Button";

export default function Modal({
  title,
  children,
  onClose,
  footer,
}) {
  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        {title && (
          <div className="modal-header">
            <h3>{title}</h3>

            <div className="modal-close" onClick={onClose}>
              ✕
            </div>
          </div>
        )}

        {/* BODY */}
        <div className="modal-body">
          {children}
        </div>

        {/* FOOTER */}
        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}

      </div>
    </div>
  );
}