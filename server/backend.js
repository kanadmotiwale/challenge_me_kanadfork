import express from "express";
// import session from "express-session";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
// import passport from "./config/passport.js";

import users from "./routes/users.js";
// import authRouter from "./routes/Auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Session configuration
// app.use(
//   session({
//     secret: "your-secret-key-change-in-production",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: false, // Set to true in production with HTTPS
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000, // 24 hours
//     },
//   })
// );

// Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());

app.use("/", express.static("./client/dist"));
app.use("/api", users);
// app.use("/api/auth", authRouter);

app.get("*splat", function (req, res) {
  res.sendFile("index.html", {
    root: join(__dirname, "./client/dist"),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
