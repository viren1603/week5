const express = require('express');
const r = express.Router();
const controller = require('../controller/controller');
const upload = require('../middleware/profileImg');
// const validation = require("../middleware/CreatUserMiddleware")
const validation = require("../middleware/createValidation")

r.post('/CreateTeam', controller.CreateTeam)
r.post('/CreateDevloper', upload.single("imgPath"), validation('creatDeveloperValidation'), controller.CreateDevloper)
r.get('/ViewTeam', controller.ViewTeam)
r.get('/ViewDevloper', controller.ViewDevloper)

module.exports = r;