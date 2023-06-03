const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const builderRoutes = require("./builderRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const pokemonRoutes = require("./pokemonRoutes");
const speciesRoutes = require("./speciesRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/builder", builderRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/pokemon", pokemonRoutes);
router.use("/species", speciesRoutes);

module.exports = router;
