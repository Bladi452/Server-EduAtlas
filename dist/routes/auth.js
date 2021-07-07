"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth");

var router = (0, _express.Router)();
router.post('/auth/regis', _auth.registrar);
router.post('/auth/login', _auth.validar);
var _default = router;
exports["default"] = _default;