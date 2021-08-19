"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImg = exports.getDocs = exports.download = void 0;

var _database = require("../database");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var download = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, pass, file;

    return regeneratorRuntime.wrap(function _callee$(_context) {
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
            _yield$db$query2 = _slicedToArray(_yield$db$query, 1);
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, pass;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
            _yield$db$query4 = _slicedToArray(_yield$db$query3, 1);
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var sampleFile, uploadPath, ruta, db;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
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