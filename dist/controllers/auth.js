"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validar = exports.registrar = void 0;

var _database = require("../database");

var _helpers = require("../middleware/helpers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registrar = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, pass;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return (0, _helpers.encryptPassword)(req.body.password);

          case 5:
            pass = _context.sent;
            _context.next = 8;
            return db.query("INSERT INTO usuario (Matricula, Nombre, Apellido, Correo, password,Fecha_Nacimiento, Nivel) VALUES (?,?,?,?,?,?,?)", [req.body.Matricula, req.body.Nombre, req.body.Apellido, req.body.Correo, pass, req.body.Fecha_Nacimiento, req.body.Nivel]);

          case 8:
            res.send('Se guardaron los datos');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registrar(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registrar = registrar;

var validar = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var db, Matricula, contra, user, validPassword;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            Matricula = req.body.Matricula;
            contra = req.body.password;
            _context2.next = 7;
            return db.query("SELECT * FROM usuario WHERE Matricula = ?", [Matricula]);

          case 7:
            user = _context2.sent;

            if (!(user[0].length > 0)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 11;
            return (0, _helpers.matchPassword)(contra, user[0][0].password);

          case 11:
            validPassword = _context2.sent;

            if (validPassword) {
              console.log("Contraseña validada, bienvenido");
            } else {
              console.log("No se valido la contraseña");
            }

            _context2.next = 16;
            break;

          case 15:
            console.log('No existe el usuario');

          case 16:
            res.send('Termino de validar');

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function validar(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.validar = validar;