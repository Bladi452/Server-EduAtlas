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
            _context.prev = 3;
            _context.next = 6;
            return db.query('SELECT sala_usuario.Id,sala.Fecha ,sala.id_Sala, sala.Nombre FROM sala_usuario INNER JOIN sala ON sala.id_Sala = (SELECT Id_Sala FROM sala_usuario WHERE Matricula = ?) LIMIT 1;', [req.params.id]);

          case 6:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (!rows.length > 0) {
              res.status(404).json({
                message: "No encontrado"
              });
            } else {
              res.status(200).json(rows);
              db.end();
            }

            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            res.status(404).json({
              message: "No funciono"
            });
            db.end();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 12]]);
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
            _context2.prev = 3;
            _context2.next = 6;
            return db.query('SELECT mensaje.mensaje,mensaje.id ,mensaje.Matricula, mensaje.id_Sala, mensaje.fecha , CONCAT(usuario.Nombre, usuario.Apellido) AS NomCom FROM `usuario` INNER JOIN mensaje ON usuario.Matricula = mensaje.Matricula WHERE id_Sala = 1 ORDER BY `mensaje`.`id` DESC;', [req.params.id]);

          case 6:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];

            if (!rows.length > 0) {
              console.log(rows);
              res.status(404).json({
                message: "No encontrado"
              });
              db.end();
            } else {
              res.status(200).json(rows);
              db.end();
            }

            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            db.end();

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
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
            _context3.prev = 3;
            _context3.next = 6;
            return db.query("INSERT INTO mensaje (mensaje, id_Sala, Matricula, fecha) VALUES (?, ?, ?, NOW())", [req.body.mensaje, req.body.id_Sala, req.body.Matricula]);

          case 6:
            rows = _context3.sent;

            if (!rows) {
              res.status(304).json({
                message: "No se envio"
              });
              db.end();
            } else {
              res.status(200).json({
                message: "Mensaje enviado"
              });
              db.end();
            }

            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            res.status(400).json({
              message: "No se envio"
            });
            db.end();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));

  return function sendMessage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.sendMessage = sendMessage;