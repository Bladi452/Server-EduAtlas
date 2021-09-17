"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _solicitud = require("../controllers/solicitud");

var router = (0, _express.Router)();
router.get('/server-edu/solicitudes/:id', _solicitud.getSolid);
router.put('/server-edu/apro/:id', _solicitud.getAcept);
router.put('/server-edu/dene/:id', _solicitud.getDenega);
var _default = router;
exports["default"] = _default;