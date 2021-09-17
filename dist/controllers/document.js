"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImg = exports.getDocs = exports.download = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var download = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, pass, file;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.query("SELECT * FROM documentos WHERE Id_documentos = ?", [req.params.id]);

          case 5:
            _yield$db$query = _context.sent;
            _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
            pass = _yield$db$query2[0];
            file = __dirname + pass[0].UrlDocs;
            res.download(file);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function download(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.download = download;

var getDocs = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, pass;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            _context2.next = 5;
            return db.query("SELECT * FROM documentos WHERE Matricula = ?", [req.params.id]);

          case 5:
            _yield$db$query3 = _context2.sent;
            _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
            pass = _yield$db$query4[0];

            if (!(!pass.length > 0)) {
              _context2.next = 12;
              break;
            }

            res.status(404).json({
              message: "No encontrado"
            });
            _context2.next = 13;
            break;

          case 12:
            return _context2.abrupt("return", res.status(200).json(pass));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDocs(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //hasta yo quiero saber pero no se, la que esta comentada se ve mejor


exports.getDocs = getDocs;

var uploadImg = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var sampleFile, uploadPath, ruta, db;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(!req.files || Object.keys(req.files).length === 0)) {
              _context4.next = 3;
              break;
            }

            res.status(400).send('No files were uploaded.');
            return _context4.abrupt("return");

          case 3:
            console.log('req.files >>>', req.files);
            sampleFile = req.files.docs;
            console.log(sampleFile);
            ruta = '/upload/' + sampleFile.name;
            uploadPath = __dirname + ruta; // Use the mv() method to place the file somewhere on your server

            _context4.next = 10;
            return (0, _database.connect)();

          case 10:
            db = _context4.sent;
            sampleFile.mv(uploadPath, /*#__PURE__*/function () {
              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(err) {
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return db.query("INSERT INTO documentos (Nombre,UrlDocs, Estado, Codigo_Escuelas ,Matricula) VALUES (?,?,?,?,?)", [req.params.docu, ruta, "null", req.params.id_escu, req.params.id]);

                      case 2:
                        if (!err) {
                          _context3.next = 4;
                          break;
                        }

                        return _context3.abrupt("return", res.status(500).send(err));

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }());
            res.send('File uploaded to ');

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function uploadImg(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.uploadImg = uploadImg;