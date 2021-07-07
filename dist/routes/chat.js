"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _chat = require("../controllers/chat");

var router = (0, _express.Router)();
router.get('/chat/:id', _chat.getChat);
router.get('/chat/message/:id', _chat.getMessage);
router.post('/chat', _chat.sendMessage);
var _default = router;
exports["default"] = _default;