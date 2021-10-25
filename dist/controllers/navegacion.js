"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navegacionGetSol = exports.navegacion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var navegacion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return db.query("SELECT * FROM usuario WHERE Matricula = ?", [req.params.id]);

          case 6:
            user = _context.sent;
            res.json(user[0]);
            db.end();
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            res.status(400).json({
              message: _context.t0
            });
            db.end();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));

  return function navegacion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.navegacion = navegacion;

var navegacionGetSol = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, solicitud;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            _context2.prev = 3;
            _context2.next = 6;
            return db.query("SELECT * FROM solicitud WHERE Matricula = ? ORDER BY Id_Solicitud DESC", [req.params.id]);

          case 6:
            solicitud = _context2.sent;
            res.json(solicitud[0]);
            db.end();
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](3);
            res.status(400).json({
              message: _context2.t0
            });
            db.end();

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 11]]);
  }));

  return function navegacionGetSol(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.navegacionGetSol = navegacionGetSol;