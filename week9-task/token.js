const jwt = require("jsonwebtoken");

console.log(
  jwt.sign(
    { email: "user@example.com" },
    "abc123",
    { expiresIn: "1h" }
  )
);
