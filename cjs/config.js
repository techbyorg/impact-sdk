"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _process, _process$env;

var _default = {
  API_URL: ((_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.TECH_BY_IMPACT_API_URL) || 'https://api.techby.org/impact/v1/graphql'
};
exports["default"] = _default;