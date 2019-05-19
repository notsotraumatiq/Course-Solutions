const searchRoutes = require("./search");
const detailRoutes = require("./details");
const path = require("path");

const constructorMethod = app => {
  app.use("/search", searchRoutes);
  app.use("/details", detailRoutes);
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("static/PeopleFinder.html"));
  });

  app.use("*", (req, res) => {
    res.status(404).json({ ERROR: "URL NOT FOUND"});
  });
};

module.exports = constructorMethod;
