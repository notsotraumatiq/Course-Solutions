const postRoutes = require("./posts");

const constructorMethod = app => {
  app.use("", postRoutes);
  // app.use("/users", userRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
