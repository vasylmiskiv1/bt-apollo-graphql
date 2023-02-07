const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const http = require("http");
const path = require("path");
require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

{
/* for SSR
  const __rootdir = path.resolve();
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__rootdir, "client", "build", "index.html"));
  });
*/
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
