"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _navegacion = require("../controllers/navegacion");

var router = (0, _express.Router)();
router.get('/server-edu/navegacion/:id', _navegacion.navegacion);
router.get('/server-edu/navegacionSel/:id', _navegacion.navegacionGetSol);
var _default = router;
exports["default"] = _default;