"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validar = exports.registrar = exports.getMat = exports.conectar = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var _helpers = require("../middleware/helpers");

var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var conectar = /*#__PURE__*/function () {
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
            return db.query("INSERT INTO cargo_seleccionar ( Id_Cargo, Matricula) VALUES (?,?)", [req.params.id_cargo, req.params.id]);

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (rows) {
              _context.next = 12;
              break;
            }

            res.status(304).json({
              message: "No se guardo"
            });
            _context.next = 13;
            break;

          case 12:
            return _context.abrupt("return", res.status(200).json({
              message: "Usuario guardado"
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function conectar(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.conectar = conectar;

var getMat = /*#__PURE__*/function () {
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
            return db.query('SELECT Matricula FROM usuario ORDER by Matricula DESC LIMIT 1;');

          case 5:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            rows = _yield$db$query4[0];
            console.log(rows);
            res.json(rows);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMat(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMat = getMat;

var registrar = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, pass, _yield$db$query5, _yield$db$query6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            _context3.next = 5;
            return (0, _helpers.encryptPassword)(req.body.password);

          case 5:
            pass = _context3.sent;
            _context3.next = 8;
            return db.query("INSERT INTO usuario (Nombre, Apellido, Correo, Pass, Fecha_Nacimiento, Codigo_Escuelas) VALUES (?,?,?,?,?,?)", [req.body.Nombre, req.body.Apellidos, req.body.Email, pass, req.body.date, null]);

          case 8:
            _yield$db$query5 = _context3.sent;
            _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
            rows = _yield$db$query6[0];

            if (rows) {
              _context3.next = 15;
              break;
            }

            res.status(304).json({
              message: "No se guardo"
            });
            _context3.next = 16;
            break;

          case 15:
            return _context3.abrupt("return", res.status(200).json({
              message: "Tu matricula es Copiala o captura la pantalla"
            }));

          case 16:
            console.log(matricula);
            res.end('estamos bien');

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function registrar(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.registrar = registrar;

var validar = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var db, Matricula, contra, user, validPassword, token;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context4.sent;
            Matricula = req.body.Matricula;
            contra = req.body.password;
            _context4.next = 7;
            return db.query("SELECT usuario.Matricula, usuario.Codigo_Escuelas, usuario.Pass, cargo_seleccionar.Id_Cargo_Seleccionar, cargo.Nivel FROM cargo_seleccionar INNER JOIN cargo ON cargo_seleccionar.Id_Cargo = cargo.Id_Cargo INNER JOIN usuario ON cargo_seleccionar.Matricula = usuario.Matricula WHERE usuario.Matricula = ?", [Matricula]);

          case 7:
            user = _context4.sent;

            if (!(user[0].length > 0)) {
              _context4.next = 15;
              break;
            }

            _context4.next = 11;
            return (0, _helpers.matchPassword)(contra, user[0][0].Pass);

          case 11:
            validPassword = _context4.sent;

            if (validPassword) {
              token = _jsonwebtoken["default"].sign({
                Matricula: req.body.Matricula
              }, 'secret', {
                expiresIn: '1h'
              });
              res.status(200).json({
                message: user[0]
              });
            } else {
              res.status(502).json({
                message: "La contraseña es incorrecta"
              });
            }

            _context4.next = 16;
            break;

          case 15:
            return _context4.abrupt("return", res.status(404).json({
              message: "Usuario no encontrado"
            }));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function validar(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.validar = validar;