(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DataManager = Object.create(null, {
  getJournalEntries: {
    value: function value() {
      return fetch("http://localhost:8088/entries").then(function (response) {
        return response.json();
      });
    }
  },
  saveJournalEntry: {
    value: function () {
      var _value = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(entry) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("http://localhost:8088/entries", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(entry)
                });

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function value(_x) {
        return _value.apply(this, arguments);
      };
    }()
  }
});
module.exports = DataManager;

},{}],2:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_data.default.getJournalEntries().then(function (entries) {
  console.log(entries);
});

},{"./data":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBUCxDQUFjLElBQWQsRUFBb0I7QUFDcEMsRUFBQSxpQkFBaUIsRUFBRTtBQUNmLElBQUEsS0FBSyxFQUFFLGlCQUFZO0FBQ2YsYUFBTyxLQUFLLENBQUMsK0JBQUQsQ0FBTCxDQUNGLElBREUsQ0FDRyxVQUFBLFFBQVE7QUFBQSxlQUFJLFFBQVEsQ0FBQyxJQUFULEVBQUo7QUFBQSxPQURYLENBQVA7QUFFSDtBQUpjLEdBRGlCO0FBT3BDLEVBQUEsZ0JBQWdCLEVBQUU7QUFDZCxJQUFBLEtBQUs7QUFBQTtBQUFBO0FBQUEsOEJBQUUsaUJBQWdCLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ29CLEtBQUssQ0FBQywrQkFBRCxFQUFrQztBQUMxRCxrQkFBQSxNQUFNLEVBQUUsTUFEa0Q7QUFFMUQsa0JBQUEsT0FBTyxFQUFFO0FBQ0wsb0NBQWdCO0FBRFgsbUJBRmlEO0FBSzFELGtCQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWY7QUFMb0QsaUJBQWxDLENBRHpCOztBQUFBO0FBQ0csZ0JBQUEsUUFESDtBQUFBLGlEQVFJLFFBQVEsQ0FBQyxJQUFULEVBUko7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURTO0FBUGtCLENBQXBCLENBQXBCO0FBcUJBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFdBQWpCOzs7OztBQ3JCQTs7OztBQUVBLGNBQVksaUJBQVosR0FBZ0MsSUFBaEMsQ0FBcUMsVUFBQSxPQUFPLEVBQUk7QUFDNUMsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgRGF0YU1hbmFnZXIgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBnZXRKb3VybmFsRW50cmllczoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXNcIilcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNhdmVKb3VybmFsRW50cnk6IHtcbiAgICAgICAgdmFsdWU6IGFzeW5jIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudHJ5KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG4gICAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhTWFuYWdlciIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9kYXRhXCJcblxuRGF0YU1hbmFnZXIuZ2V0Sm91cm5hbEVudHJpZXMoKS50aGVuKGVudHJpZXMgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVudHJpZXMpXG59KSJdfQ==
