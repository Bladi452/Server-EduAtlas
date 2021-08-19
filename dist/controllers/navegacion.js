"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navegacionGetSol = exports.navegacion = void 0;

var _database = require("../database");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var navegacion = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.query("SELECT * FROM usuario WHERE Matricula = ?", [req.params.id]);

          case 5:
            user = _context.sent;
            res.json(user[0]);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function navegacion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.navegacion = navegacion;

var navegacionGetSol = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, solicitud;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            _context2.next = 5;
            return db.query("SELECT * FROM solicitud WHERE Matricula = ? ORDER BY Id_Solicitud DESC", [req.params.id]);

          case 5:
            solicitud = _context2.sent;
            res.json(solicitud[0]);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function navegacionGetSol(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.navegacionGetSol = navegacionGetSol;