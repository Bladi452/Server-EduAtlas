"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth");

var router = (0, _express.Router)();
router.post('/server-edu/auth/conec/:id/:id_cargo', _auth.conectar);
router.post('/server-edu/auth/regis', _auth.registrar);
router.post('/server-edu/auth/login', _auth.validar);
router.get('/server-edu/auth/getmat', _auth.getMat);
var _default = router;
exports["default"] = _default;