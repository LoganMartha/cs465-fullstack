const express = require("express"); // Express app
const router = express.Router(); // Router logic

// This is where we import the controllers we will route
const tripsCollector = require("../controllers/trips");

// define route for our trips enpoint
router
    .route('/trips')
    .get(tripsCollector.tripsList); // GET Method routes tripList

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsCollector.tripsFindByCode);

module.exports = router;