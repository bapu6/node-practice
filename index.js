const express = require("express");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const indexRoute = require("./routes");
const usersRoute = require("./routes/users");
const { postsRouter } = require("./routes/posts");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRoute);
app.use("/users", usersRoute);
app.use("/posts", postsRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (err) => {
  connectDB();
  if (err) throw err;
  console.log(`server runs on port ${port}`);
});
