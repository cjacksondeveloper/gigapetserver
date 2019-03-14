require('dotenv').config();
const cors = require("cors");
const express = require('express')
const authRouter = require("../auth/authRouter.js")
const gpRouter = require("../gp/gpRouter.js")
// const configMW = require("./middleware.js")

const server = express();

server.use(express.json());
server.use(cors({ credentials: true, origin: true }))
server.options('*', cors())
server.use('/api/users', authRouter);
server.use('/api/app', gpRouter);

const port = process.env.PORT || 3300;

server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});