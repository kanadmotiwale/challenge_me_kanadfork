import "./Card.css";

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