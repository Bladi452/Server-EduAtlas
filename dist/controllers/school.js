"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReq = exports.idSelect = exports.getSchool = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getSchool = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, rows;

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
            return db.query('SELECT * FROM escuelas');

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];
            res.json(rows);
            db.end();
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            res.status(404).json({
              message: _context.t0
            });

          case 16:
            db.end();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 13]]);
  }));

  return function getSchool(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSchool = getSchool;

var idSelect = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, rows;

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
            return db.query('SELECT * FROM escuelas WHERE Codigo_Escuelas = ?', [req.params.id]);

          case 6:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];
            console.log(rows);
            res.json(rows);
            db.end();
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            res.status(400).json({
              message: _context2.t0
            });
            db.end();

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 14]]);
  }));

  return function idSelect(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.idSelect = idSelect;

var addReq = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, solicitud;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            _context3.prev = 3;
            _context3.next = 6;
            return db.query("INSERT INTO solicitud (Fecha, Estatus, Codigo_Escuelas, Matricula, Id_Curso) VALUES (NOW(),?,?,?,?) ", [req.body.Estatus, req.body.Codigo_Escuelas, req.body.id_Usu, req.body.id_curso]);

          case 6:
            solicitud = _context3.sent;

            if (solicitud) {
              _context3.next = 12;
              break;
            }

            res.status(304).json({
              message: "No se envio la solicitud"
            });
            db.end();
            _context3.next = 14;
            break;

          case 12:
            db.end();
            return _context3.abrupt("return", res.status(200).json({
              message: "Se genero la solicitud"
            }));

          case 14:
            _context3.next = 20;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](3);
            res.status(400).json({
              message: _context3.t0
            });
            db.end();

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 16]]);
  }));

  return function addReq(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.addReq = addReq;