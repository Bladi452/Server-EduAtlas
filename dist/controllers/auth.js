"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validar = exports.registrar = exports.conectar = void 0;

var _database = require("../database");

var _helpers = require("../middleware/helpers");

var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var conectar = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.query("INSERT INTO cargo_seleccionar ( Id_Cargo, Matricula) SELECT 1, Matricula FROM usuario ORDER BY Matricula DESC LIMIT 1");

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = _slicedToArray(_yield$db$query, 1);
            rows = _yield$db$query2[0];

            if (rows) {
              _context.next = 13;
              break;
            }

            res.status(304).json({
              message: "No se guardo"
            });
            console.log(matricula);
            _context.next = 15;
            break;

          case 13:
            num++;
            return _context.abrupt("return", res.status(200).json({
              message: "Usuario guardado"
            }));

          case 15:
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
var num = 1015;
var date = new Date();
var year = date.getFullYear();

var registrar = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var matriculaS, matricula, db, pass, _yield$db$query3, _yield$db$query4, rows;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(year);
            matriculaS = "".concat(year).concat(num);
            matricula = parseInt(matriculaS);
            console.log(matricula);
            _context2.next = 6;
            return (0, _database.connect)();

          case 6:
            db = _context2.sent;
            _context2.next = 9;
            return (0, _helpers.encryptPassword)(req.body.password);

          case 9:
            pass = _context2.sent;
            _context2.next = 12;
            return db.query("INSERT INTO usuario (Matricula, Nombre, Apellido, Correo, Pass, Fecha_Nacimiento, Codigo_Escuelas) VALUES (?,?,?,?,?,?,?)", [matricula, req.body.Nombre, req.body.Apellidos, req.body.Email, pass, req.body.date, null]);

          case 12:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = _slicedToArray(_yield$db$query3, 1);
            rows = _yield$db$query4[0];

            if (rows) {
              _context2.next = 20;
              break;
            }

            res.status(304).json({
              message: "No se guardo"
            });
            console.log(matricula);
            _context2.next = 22;
            break;

          case 20:
            num++;
            return _context2.abrupt("return", res.status(200).json({
              message: "Usuario guardado"
            }));

          case 22:
            console.log(matricula);
            res.end('estamos bien');

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function registrar(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.registrar = registrar;

var validar = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var db, Matricula, contra, user, validPassword, token;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            Matricula = req.body.Matricula;
            contra = req.body.password;
            _context3.next = 7;
            return db.query("SELECT usuario.Matricula, usuario.Pass, cargo_seleccionar.Id_Cargo_Seleccionar, cargo.Nivel FROM cargo_seleccionar INNER JOIN cargo ON cargo_seleccionar.Id_Cargo = cargo.Id_Cargo INNER JOIN usuario ON cargo_seleccionar.Matricula = usuario.Matricula WHERE usuario.Matricula = ? And cargo.Nivel = 107", [Matricula]);

          case 7:
            user = _context3.sent;

            if (!(user[0].length > 0)) {
              _context3.next = 15;
              break;
            }

            _context3.next = 11;
            return (0, _helpers.matchPassword)(contra, user[0][0].Pass);

          case 11:
            validPassword = _context3.sent;

            if (validPassword) {
              token = _jsonwebtoken["default"].sign({
                Matricula: req.body.Matricula
              }, 'secret', {
                expiresIn: '1h'
              });
              res.status(200).json({
                message: "Usuario y contraseña validado"
              });
            } else {
              res.status(502).json({
                message: "La contraseña es incorrecta"
              });
            }

            _context3.next = 16;
            break;

          case 15:
            return _context3.abrupt("return", res.status(404).json({
              message: "Usuario no encontrado"
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function validar(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.validar = validar;