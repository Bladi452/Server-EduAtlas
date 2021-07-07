"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _document = require("../controllers/document");

var router = (0, _express.Router)();
router.get('/document/:id', _document.download);
router.post('/document/:id/:id_escu', _document.uploadApp);
var _default = router;
exports["default"] = _default;