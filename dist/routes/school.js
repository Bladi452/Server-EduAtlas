"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _school = require("../controllers/school");

var _auth = require("../controllers/auth");

var router = (0, _express.Router)();
router.get('/server-edu/school', _school.getSchool);
router.get('/server-edu/school/:id', _school.idSelect);
router.post('/server-edu/school/req', _school.addReq);
var _default = router;
exports["default"] = _default;