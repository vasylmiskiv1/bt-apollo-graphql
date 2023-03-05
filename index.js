const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./server/schema/schema");
const cors = require("cors");
const http = require("http");
const path = require("path");
require("dotenv").config();
const connectDB = require("./server/config/db");
const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

const __dir = path.resolve();

app.use(express.static(path.join(__dir, '/client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dir, 'client', 'build', 'index.html'));
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
