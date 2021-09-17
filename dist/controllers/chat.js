"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = exports.getMessage = exports.getChat = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getChat = /*#__PURE__*/function () {
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
            _context.next = 5;
            return db.query('SELECT sala_usuario.Id,sala.Fecha ,sala.id_Sala, sala.Nombre FROM sala_usuario INNER JOIN sala ON sala.id_Sala = (SELECT Id_Sala FROM sala_usuario WHERE Matricula = ?) LIMIT 1;', [req.params.id]);

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (!(!rows.length > 0)) {
              _context.next = 12;
              break;
            }

            res.status(404).json({
              message: "No encontrado"
            });
            _context.next = 13;
            break;

          case 12:
            return _context.abrupt("return", res.status(200).json(rows));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getChat(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getChat = getChat;

var getMessage = /*#__PURE__*/function () {
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
            _context2.next = 5;
            return db.query('SELECT mensaje.mensaje,mensaje.id ,mensaje.Matricula, mensaje.id_Sala, mensaje.fecha , CONCAT(usuario.Nombre, usuario.Apellido) AS NomCom FROM `usuario` INNER JOIN mensaje ON usuario.Matricula = mensaje.Matricula WHERE id_Sala = 1 ORDER BY `mensaje`.`id` DESC;', [req.params.id]);

          case 5:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];

            if (!(!rows.length > 0)) {
              _context2.next = 13;
              break;
            }

            console.log(rows);
            res.status(404).json({
              message: "No encontrado"
            });
            _context2.next = 14;
            break;

          case 13:
            return _context2.abrupt("return", res.status(200).json(rows));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMessage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMessage = getMessage;

var sendMessage = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, rows;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            _context3.next = 5;
            return db.query("INSERT INTO mensaje (mensaje, id_Sala, Matricula, fecha) VALUES (?, ?, ?, NOW())", [req.body.mensaje, req.body.id_Sala, req.body.Matricula]);

          case 5:
            rows = _context3.sent;

            if (rows) {
              _context3.next = 10;
              break;
            }

            res.status(304).json({
              message: "No se envio"
            });
            _context3.next = 11;
            break;

          case 10:
            return _context3.abrupt("return", res.status(200).json({
              message: "Mensaje enviado"
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function sendMessage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.sendMessage = sendMessage;