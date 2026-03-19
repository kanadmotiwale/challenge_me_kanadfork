import express from "express";
import usersDB from "../db/UsersMongoDB.js";

const router = express.Router();

// GET /api/users
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 20;
  const query = {};
  console.log("🏡 Received request for /api/users", { page, pageSize, query });
  try {
    const users = await usersDB.getUsers({ query, pageSize, page });
    res.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error", users: [] });
  }
});

// PUT /api/users/:id
router.put("/:id", async (req, res) => {
  if (!req.user || req.user._id.toString() !== req.params.id) {
    return res.status(403).json({ message: "Forbidden" });
  }
  const { username, name, profileImageURL, bio, city, state } = req.body;
  try {
    const updated = await usersDB.updateUser(req.params.id, {
      username,
      name,
      profileImageURL,
      bio,
      city,
      state,
    });
    if (!updated) return res.status(404).json({ message: "User not found" });
    const { passwordHash, ...safeUser } = updated;
    res.json(safeUser);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/users/:id
router.delete("/:id", async (req, res) => {
  console.log("DELETE hit", req.params.id);
  console.log("req.user", req.user);
  // Ensure the user has permission to delete
  if (!req.user || req.user._id.toString() !== req.params.id) {
    return res.status(403).json({ message: "Forbidden" });
  }
  try {
    const result = await usersDB.deleteUser(req.params.id);
    console.log("deleteUser result:", result);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    req.logout((err) => {
      if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ message: "Logout failed" });
      }
      req.session.destroy((err) => {
        if (err) {
          console.error("Session destroy error:", err);
          return res.status(500).json({ message: "Session error" });
        }
        res.clearCookie("connect.sid");
        return res.json({ message: "Account deleted" });
      });
    });
  } catch (err) {
    console.error("Delete user error: ", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
