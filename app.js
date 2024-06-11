const express = require("express");
const app = express();
const UserRoutes = require("./routes/user-route.js");
const BlogRoutes = require("./routes/blog-route.js");
const UserService = require("./controller/user-controller.js");
const BlogService = require("./controller/blog-controller.js");

app.use(express.json());
app.use("/user", UserRoutes);
app.use("/blog", BlogRoutes);

app.use("/", UserService.userDisplay.bind(UserService));
app.listen(2222, () => [console.log(" The server started on PORT = 2222")]);
