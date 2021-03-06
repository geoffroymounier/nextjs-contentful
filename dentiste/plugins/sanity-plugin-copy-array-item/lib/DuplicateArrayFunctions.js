"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DuplicateArrayFunctions;

var _react = _interopRequireDefault(require("react"));

var _dropdown = _interopRequireDefault(require("part:@sanity/components/buttons/dropdown"));

var _default = _interopRequireDefault(require("part:@sanity/components/buttons/default"));

var _functionsDefault = _interopRequireDefault(require("part:@sanity/form-builder/input/array/functions-default"));

var _updateKeys = _interopRequireDefault(require("./updateKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DuplicateArrayFunctions(props) {
  var _type$options;

  var type = props.type,
      value = props.value,
      onAppendItem = props.onAppendItem;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      copiedItem = _React$useState2[0],
      setCopiedItem = _React$useState2[1];

  var handleDuplicateBtnClick = (_ref) => {
    var item = _ref.item;
    var newItem = item.hasOwnProperty('_key') ? (0, _updateKeys.default)(Object.assign({}, item), '_key') : item;
    onAppendItem(newItem);
  };

  var handleCopy = (_ref2) => {
    var item = _ref2.item;
    setCopiedItem(item);
  };

  var items = field => {
    if (Array.isArray(field)) {
      console.log(" You've passed an array in to the duplicate function! These aren't supported yet");
      return [];
    } // If there is no canDuplicate value, or there are no array items, return empty array


    if (field === undefined || value === undefined) {
      return [];
    }

    return value // Filter out references
    .filter(item => item._type !== 'reference') // Map remaining items
    .reduce((array, item) => {
      // If canDuplicate passes a value which doesn't correspond to a field, try alternatives:
      if (item[field] === undefined) {
        // Test to see if item can be rendered as is
        if (typeof item === 'string' || typeof item === 'number') {
          array.push({
            title: item,
            item
          });
        } // Test for common fields instead


        if (item.name || item.title || item.text || item.header || item.id || item.current || item.description) {
          array.push({
            title: item.name || item.title || item.text || item.header || item.id || item.current || item.description,
            item
          });
        } else {
          // Otherwise push nothing
          console.log('The array duplication function cannot find your field to render children. Please check your schema.');
        }

        return array;
      }

      array.push({
        title: item[field],
        item
      });
      return array;
    }, []);
  };

  var itemArray = items(type === null || type === void 0 ? void 0 : (_type$options = type.options) === null || _type$options === void 0 ? void 0 : _type$options.canDuplicate);
  return /*#__PURE__*/_react.default.createElement(_functionsDefault.default, props, itemArray.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    inverted: true,
    items: itemArray,
    onAction: handleDuplicateBtnClick
  }, "Duplicate"), /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    inverted: true,
    items: itemArray,
    onAction: handleCopy
  }, "Copy"), copiedItem && /*#__PURE__*/_react.default.createElement(_default.default, {
    inverted: true,
    text: 'Paste',
    onAction: () => console.log(copiedItem)
  })));
}