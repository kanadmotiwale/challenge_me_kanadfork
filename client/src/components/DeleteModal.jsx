import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DangerZoneModal = (user, onClose) => {
  // How can I get the _id out of cache or user object?  
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/users/${user._id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message ?? "Failed to delete account");
      }
    } catch (err) {
      setError(err.message);
    };


    // const handleDelete = () => {
    //   console.log("Item deleted");
    //   onClose();
    // };
    //

    return (
      <>
        <Modal show onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you absolutely sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: 'red' }}>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Yes, Delete Account
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default DangerZoneModal;

