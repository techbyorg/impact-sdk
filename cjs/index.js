"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.incrementMetric = incrementMetric;
exports.incrementUnique = incrementUnique;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _config = _interopRequireDefault(require("./config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var localApiKey;

function init(_x) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref) {
    var apiKey;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiKey = _ref.apiKey;
            localApiKey = apiKey;

          case 2:
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
  _incrementMetric = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(metricSlug) {
    var dimensionValues,
        count,
        _ref2,
        date,
        segmentSlugs,
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
            _ref2 = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {}, date = _ref2.date, segmentSlugs = _ref2.segmentSlugs, timeScale = _ref2.timeScale, isTotal = _ref2.isTotal, isSingleTimeScale = _ref2.isSingleTimeScale;
            return _context2.abrupt("return", request({
              query: "\n      mutation DatapointIncrement(\n        $metricSlug: String!\n        $dimensionValues: JSONObject\n        $count: Int!\n        $date: Date\n        $segmentSlugs: [String]\n        $timeScale: String\n        $isTotal: Boolean\n        $isSingleTimeScale: Boolean\n      ) {\n        datapointIncrement(\n          metricSlug: $metricSlug\n          dimensionValues: $dimensionValues\n          count: $count\n          date: $date\n          segmentSlugs: $segmentSlugs\n          timeScale: $timeScale\n          isTotal: $isTotal\n          isSingleTimeScale: $isSingleTimeScale\n        )\n      }\n    ",
              variables: {
                metricSlug: metricSlug,
                dimensionValues: dimensionValues,
                count: count,
                date: date,
                segmentSlugs: segmentSlugs,
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
  _incrementUnique = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(metricSlug, hash) {
    var _ref3,
        date,
        segmentSlugs,
        _args3 = arguments;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref3 = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {}, date = _ref3.date, segmentSlugs = _ref3.segmentSlugs;
            return _context3.abrupt("return", request({
              query: "\n      mutation DatapointIncrementUnique(\n        $metricSlug: String!\n        $segmentSlugs: [String]\n        $hash: String!\n        $date: Date\n      ) {\n        datapointIncrementUnique(\n          metricSlug: $metricSlug\n          segmentSlugs: $segmentSlugs\n          hash: $hash\n          date: $date\n        )\n      }\n\n    ",
              variables: {
                metricSlug: metricSlug,
                segmentSlugs: segmentSlugs,
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
    withCredentials: true,
    headers: {
      Authorization: "Bearer ".concat(localApiKey),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
}