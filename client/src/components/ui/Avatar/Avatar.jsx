import "./Avatar.css";
import PropTypes from "prop-types";

export default function Avatar({ src, username = "", size = 48 }) {
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

Avatar.propTypes = {
  src: PropTypes.string,
  username: PropTypes.string,
  size: PropTypes.number,
};
