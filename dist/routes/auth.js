"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth");

var router = (0, _express.Router)();
router.post('/auth/conec/:id/:id_cargo', _auth.conectar);
router.post('/auth/regis', _auth.registrar);
router.post('/auth/login', _auth.validar);
router.get('/auth/getmat', _auth.getMat);
var _default = router;
exports["default"] = _default;