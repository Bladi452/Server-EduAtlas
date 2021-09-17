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
            _context.next = 5;
            return db.query('SELECT solicitud.Id_Solicitud, solicitud.Codigo_Escuelas ,solicitud.Fecha, solicitud.Estatus, usuario.Matricula, curso.Grado, escuelas.Nombre FROM solicitud INNER JOIN curso ON solicitud.Id_Curso = curso.ID_Curso INNER JOIN usuario ON usuario.Matricula = solicitud.Matricula INNER JOIN escuelas ON solicitud.Codigo_Escuelas = escuelas.Codigo_Escuelas WHERE solicitud.Codigo_Escuelas = ? AND solicitud.Estatus = "null"', [req.params.id]);

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            pass = _yield$db$query2[0];

            if (!(!pass.length > 0)) {
              _context.next = 12;
              break;
            }

            res.status(404).json({
              message: "No encontrado"
            });
            _context.next = 13;
            break;

          case 12:
            return _context.abrupt("return", res.status(200).json(pass));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSolid(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSolid = getSolid;

var updateTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context2.sent;
            _context2.next = 5;
            return connection.query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id]);

          case 5:
            res.sendStatus(204);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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
            _context3.next = 5;
            return db.query("UPDATE `solicitud` SET `Estatus` = 'Aprobado' WHERE `solicitud`.`Id_Solicitud` = ?;", [req.params.id]);

          case 5:
            pass = _context3.sent;

            if (!(!pass.length > 0)) {
              _context3.next = 10;
              break;
            }

            res.status(404).json({
              message: "No encontrado"
            });
            _context3.next = 11;
            break;

          case 10:
            return _context3.abrupt("return", res.status(200).json({
              message: "Estas son las Solicitudes"
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
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
            _context4.next = 5;
            return db.query("UPDATE `solicitud` SET `Estatus` = 'Denegado' WHERE `solicitud`.`Id_Solicitud` = ?;", [req.params.id]);

          case 5:
            _yield$db$query3 = _context4.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            pass = _yield$db$query4[0];

            if (!(!pass.length > 0)) {
              _context4.next = 12;
              break;
            }

            res.status(404).json({
              message: "No encontrado"
            });
            _context4.next = 13;
            break;

          case 12:
            return _context4.abrupt("return", res.status(200).json(pass));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getDenega(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getDenega = getDenega;