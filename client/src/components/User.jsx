import PropTypes from "prop-types";

export default function User({ id, username }) {
  return <div>User {username}</div>;
}

User.propTypes = {
  id: PropTypes.any,
  username: PropTypes.string.isRequired,
};
