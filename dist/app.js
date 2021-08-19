"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _chat = _interopRequireDefault(require("./routes/chat"));

var _navegacion = _interopRequireDefault(require("./routes/navegacion"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _school = _interopRequireDefault(require("./routes/school"));

var _document = _interopRequireDefault(require("./routes/document"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _expressFileupload["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_chat["default"]);
app.use(_auth["default"]);
app.use(_school["default"]);
app.use(_document["default"]);
app.use(_navegacion["default"]);
app.use(function (_, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
var _default = app;
exports["default"] = _default;