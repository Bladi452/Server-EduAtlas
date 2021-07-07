"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _school = require("../controllers/school");

var router = (0, _express.Router)();
router.get('/school', _school.getSchool);
router.get('/school/:id', _school.idSelect);
router.post('/school/req', _school.addReq);
var _default = router;
exports["default"] = _default;