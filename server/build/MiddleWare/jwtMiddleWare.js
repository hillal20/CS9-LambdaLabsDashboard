"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.secret=exports.makeToken=void 0;var _jsonwebtoken=require("jsonwebtoken"),_jsonwebtoken2=_interopRequireDefault(_jsonwebtoken);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}require("dotenv").config();var secret=process.env.SECRET_KEY;function makeToken(a){var b=a._id,c=a.email,d={sub:b,iat:new Date().getTime(),email:c},e=_jsonwebtoken2.default.sign(d,secret,{expiresIn:"24h"});return e}exports.makeToken=makeToken,exports.secret=secret;