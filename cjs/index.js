"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.incrementMetric = incrementMetric;
exports.incrementUnique = incrementUnique;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _config = _interopRequireDefault(require("./config.js"));

// let localApiKey
// FIXME: pass apiKey to server
function init(_x) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref) {
    var apiKey;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiKey = _ref.apiKey;

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

function incrementMetric(_x2) {
  return _incrementMetric.apply(this, arguments);
} // for stuff like dau/wau/mau and retention


function _incrementMetric() {
  _incrementMetric = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(metricSlug) {
    var dimensionValues,
        count,
        _ref2,
        date,
        timeScale,
        isTotal,
        isSingleTimeScale,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dimensionValues = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            count = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 1;
            _ref2 = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {}, date = _ref2.date, timeScale = _ref2.timeScale, isTotal = _ref2.isTotal, isSingleTimeScale = _ref2.isSingleTimeScale;
            return _context2.abrupt("return", request({
              query: "\n      mutation DatapointIncrement(\n        $metricSlug: String!\n        $dimensionValues: JSONObject\n        $count: Int!\n        $date: Date\n        $timeScale: String\n        $isTotal: Boolean\n        $isSingleTimeScale: Boolean\n      ) {\n        datapointIncrement(\n          metricSlug: $metricSlug\n          dimensionValues: $dimensionValues\n          count: $count\n          date: $date\n          timeScale: $timeScale\n          isTotal: $isTotal\n          isSingleTimeScale: $isSingleTimeScale\n        )\n      }\n    ",
              variables: {
                metricSlug: metricSlug,
                dimensionValues: dimensionValues,
                count: count,
                date: date,
                timeScale: timeScale,
                isTotal: isTotal,
                isSingleTimeScale: isSingleTimeScale
              }
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _incrementMetric.apply(this, arguments);
}

function incrementUnique(_x3, _x4) {
  return _incrementUnique.apply(this, arguments);
}

function _incrementUnique() {
  _incrementUnique = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(metricSlug, hash) {
    var _ref3,
        date,
        _args3 = arguments;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref3 = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {}, date = _ref3.date;
            return _context3.abrupt("return", request({
              query: "\n      mutation DatapointIncrementUnique(\n        $metricSlug: String!\n        $hash: String!\n        $date: Date\n      ) {\n        datapointIncrementUnique(\n          metricSlug: $metricSlug\n          hash: $hash\n          date: $date\n        )\n      }\n\n    ",
              variables: {
                metricSlug: metricSlug,
                hash: hash,
                date: date
              }
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _incrementUnique.apply(this, arguments);
}

function request(body) {
  return (0, _crossFetch["default"])(_config["default"].API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
}