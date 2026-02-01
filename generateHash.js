const bcrypt = require("bcryptjs");

bcrypt.hash("@PawanAdmin123", 10).then((hash) => {
  console.log(hash);
});
