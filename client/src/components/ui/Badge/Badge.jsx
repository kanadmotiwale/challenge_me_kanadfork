import "./Badge.css";

export default function Badge({
  children,
  variant = "default", // default | primary | soft | success | progress | complete
}) {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
    </span>
  );
}