"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadApp = exports.download = void 0;

var _database = require("../database");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var download = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, pass, file;
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
            pass = _context.sent;
            file = __dirname + pass[0][0].UrlDocs;
            res.download(file);

          case 8:
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

var uploadApp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var sampleFile, uploadPath, ruta, db;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!req.files || Object.keys(req.files).length === 0)) {
              _context3.next = 3;
              break;
            }

            res.status(400).send('No files were uploaded.');
            return _context3.abrupt("return");

          case 3:
            console.log('req.files >>>', req.files); // eslint-disable-line
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

            sampleFile = req.files.sampleFile;
            console.log(sampleFile);
            ruta = '/upload/' + sampleFile.name;
            uploadPath = __dirname + ruta; // Use the mv() method to place the file somewhere on your server

            _context3.next = 10;
            return (0, _database.connect)();

          case 10:
            db = _context3.sent;
            sampleFile.mv(uploadPath, /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return db.query("INSERT INTO documentos (UrlDocs, Estado, Codigo_Escuelas ,Id_Usuario) VALUES (?,?,?,?)", [ruta, "null", req.params.id_escu, req.params.id]);

                      case 2:
                        if (!err) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return", res.status(500).send(err));

                      case 4:
                        res.send('File uploaded to ' + uploadPath);

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x5) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function uploadApp(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.uploadApp = uploadApp;