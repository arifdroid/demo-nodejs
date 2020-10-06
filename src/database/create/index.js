"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('../models');
db.sequelize.sync({ force: true }).then(function () {
}).catch(function (e) {
});
