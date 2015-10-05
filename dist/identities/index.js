'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _duplicateJs = require('./duplicate.js');

var _duplicateJs2 = _interopRequireDefault(_duplicateJs);

var _falseyJs = require('./falsey.js');

var _falseyJs2 = _interopRequireDefault(_falseyJs);

var _truthyJs = require('./truthy.js');

var _truthyJs2 = _interopRequireDefault(_truthyJs);

var _uniqJs = require('./uniq.js');

var _uniqJs2 = _interopRequireDefault(_uniqJs);

exports['default'] = { duplicate: _duplicateJs2['default'], falsey: _falseyJs2['default'], truthy: _truthyJs2['default'], uniq: _uniqJs2['default'] };
module.exports = exports['default'];