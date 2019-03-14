require('dotenv').config();
const cors = require("cors");
const express = require('express')
const authRouter = require("../auth/authRouter.js")
const gpRouter = require("../gp/gpRouter.js")
// const configMW = require("./middleware.js")

const server = express();

server.use(express.json());

server.use(cors({ credentials: true,  origin: '*' }))
server.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
server.use('/api/users', authRouter);
server.use('/api/app', gpRouter);

const port = process.env.PORT || 3300;

server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});