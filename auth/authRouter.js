const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");
const authMW = require("../auth/AuthMW.js");
const db = require("../gp/gpModule.js");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;
  db.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// router.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   findAllByFilter('users', username)
//     .first()
//     .then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         const token = authMW.makejwt(user);
//         res.status(200).json({ message: `welcome ${user.username}`, token });
//       } else {
//         res.status(401).json({ message: "Invalid Login Credentials, Try Again" });
//       }
//     });
// });


// router.post("/checkauth", (req, res) => {
//   const token = req.body.token;
//   jwt.verify(token, secrets.jwtSecret, err => {
//     if (err) {
//       res.send(false);
//     } else {
//       res.send(true);
//     }
//   });
// });


module.exports = router;