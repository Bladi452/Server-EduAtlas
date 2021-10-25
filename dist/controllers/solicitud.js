"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDenega = exports.getAcept = exports.updateTask = exports.getSolid = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getSolid = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, pass;

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
            return db.query('SELECT solicitud.Id_Solicitud, solicitud.Codigo_Escuelas ,solicitud.Fecha, solicitud.Estatus, usuario.Matricula, curso.Grado, escuelas.Nombre FROM solicitud INNER JOIN curso ON solicitud.Id_Curso = curso.ID_Curso INNER JOIN usuario ON usuario.Matricula = solicitud.Matricula INNER JOIN escuelas ON solicitud.Codigo_Escuelas = escuelas.Codigo_Escuelas WHERE solicitud.Codigo_Escuelas = ? AND solicitud.Estatus = "null"', [req.params.id]);

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            pass = _yield$db$query2[0];

            if (!pass.length > 0) {
              res.status(404).json({
                message: "No encontrado"
              });
              db.end();
            } else {
              res.status(200).json(pass);
              db.end();
            }

            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            res.status(400).json({
              message: _context.t0
            });
            db.end();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 12]]);
  }));

  return function getSolid(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSolid = getSolid;

var updateTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db;
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
            return db.query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id]);

          case 6:
            res.sendStatus(204);
            db.end();
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            res.status(400).json({
              message: _context2.t0
            });
            db.end();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));

  return function updateTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;

var getAcept = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, pass;
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
            return db.query("UPDATE `solicitud` SET `Estatus` = 'Aprobado' WHERE `solicitud`.`Id_Solicitud` = ?;", [req.params.id]);

          case 6:
            pass = _context3.sent;

            if (!pass.length > 0) {
              res.status(404).json({
                message: "No encontrado"
              });
              db.end();
            } else {
              res.status(200).json({
                message: "Estas son las Solicitudes"
              });
              db.end();
            }

            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            res.status(400).json({
              message: _context3.t0
            });
            db.end();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));

  return function getAcept(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAcept = getAcept;

var getDenega = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var db, _yield$db$query3, _yield$db$query4, pass;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context4.sent;
            _context4.prev = 3;
            _context4.next = 6;
            return db.query("UPDATE `solicitud` SET `Estatus` = 'Denegado' WHERE `solicitud`.`Id_Solicitud` = ?;", [req.params.id]);

          case 6:
            _yield$db$query3 = _context4.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            pass = _yield$db$query4[0];

            if (!(!pass.length > 0)) {
              _context4.next = 14;
              break;
            }

            res.status(404).json({
              message: "No encontrado"
            });
            db.end();
            _context4.next = 16;
            break;

          case 14:
            db.end();
            return _context4.abrupt("return", res.status(200).json(pass));

          case 16:
            _context4.next = 22;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](3);
            res.status(400).json({
              message: _context4.t0
            });
            db.end();

          case 22:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 18]]);
  }));

  return function getDenega(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getDenega = getDenega;