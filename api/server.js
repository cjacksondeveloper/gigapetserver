require('dotenv').config();
const express = require('express')
const authRouter = require("../auth/authRouter.js")
const gpRouter = require("../gp/gpRouter.js")
const configMW = require("./middleware.js")

const server = express();

configMW(server);

server.use('/api/auth', authRouter);
server.use('/api/gpRouter', gpRouter);

const port = process.env.PORT || 3300;

server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});