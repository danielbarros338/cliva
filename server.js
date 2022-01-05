const express = require("express");
const app = express();
const path = require("path");
const serverStatic = require("serve-static");

app.use(serverStatic(path.join(__dirname, "dist")));

app.listen(process.env.PORT || 3000, () => console.log("Server online"));
