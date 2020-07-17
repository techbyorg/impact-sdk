"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impact = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _config = _interopRequireDefault(require("./config.js"));

// FIXME: pass apiKey to server
var Impact =
/*#__PURE__*/
function () {
  function Impact(_ref) {
    var apiKey = _ref.apiKey;
    (0, _classCallCheck2["default"])(this, Impact);
    this.apiKey = apiKey;
  }

  (0, _createClass2["default"])(Impact, [{
    key: "incrementMetric",
    value: function () {
      var _incrementMetric = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(metricSlug) {
        var dimensionValues,
            count,
            _ref2,
            date,
            timeScale,
            isTotal,
            isSingleTimeScale,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dimensionValues = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                count = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
                _ref2 = _args.length > 3 && _args[3] !== undefined ? _args[3] : {}, date = _ref2.date, timeScale = _ref2.timeScale, isTotal = _ref2.isTotal, isSingleTimeScale = _ref2.isSingleTimeScale;
                return _context.abrupt("return", request({
                  query: "\n        mutation DatapointIncrement(\n          $metricSlug: String!\n          $dimensionValues: JSONObject\n          $count: Int!\n          $date: Date\n          $timeScale: String\n          $isTotal: Boolean\n          $isSingleTimeScale: Boolean\n        ) {\n          datapointIncrement(\n            metricSlug: $metricSlug\n            dimensionValues: $dimensionValues\n            count: $count\n            date: $date\n            timeScale: $timeScale\n            isTotal: $isTotal\n            isSingleTimeScale: $isSingleTimeScale\n          )\n        }\n      ",
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
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function incrementMetric(_x) {
        return _incrementMetric.apply(this, arguments);
      }

      return incrementMetric;
    }() // for stuff like dau/wau/mau and retention

  }, {
    key: "incrementUnique",
    value: function () {
      var _incrementUnique = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(metricSlug, hash) {
        var _ref3,
            date,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref3 = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {}, date = _ref3.date;
                return _context2.abrupt("return", request({
                  query: "\n        mutation DatapointIncrementUnique(\n          $metricSlug: String!\n          $hash: String!\n          $date: Date\n        ) {\n          datapointIncrementUnique(\n            metricSlug: $metricSlug\n            hash: $hash\n            date: $date\n          )\n        }\n\n      ",
                  variables: {
                    metricSlug: metricSlug,
                    hash: hash,
                    date: date
                  }
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function incrementUnique(_x2, _x3) {
        return _incrementUnique.apply(this, arguments);
      }

      return incrementUnique;
    }()
  }]);
  return Impact;
}();

exports.Impact = Impact;

function request(body) {
  return (0, _crossFetch["default"])(_config["default"].API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
}