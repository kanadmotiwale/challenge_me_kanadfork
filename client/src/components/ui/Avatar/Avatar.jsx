import "./Avatar.css";

export default function Avatar({
  src,
  username = "",
  size = 48,
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={username}
        className="avatar"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="avatar avatar-fallback"
      style={{ width: size, height: size }}
    >
      {username.slice(0, 2).toUpperCase()}
    </div>
  );
}