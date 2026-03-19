import "./Chip.css";

export default function Chip({
  label,
  active = false,
  onClick,
}) {
  return (
    <div
      className={`chip ${active ? "chip-active" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}