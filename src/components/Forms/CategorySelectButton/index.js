"use strict";
exports.__esModule = true;
exports.CategorySelectButton = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function CategorySelectButton(_a) {
    var title = _a.title, onPress = _a.onPress;
    return (react_1["default"].createElement(styles_1.Container, { onPress: onPress },
        react_1["default"].createElement(styles_1.Category, null, title),
        react_1["default"].createElement(styles_1.Icon, { name: "chevron-down" })));
}
exports.CategorySelectButton = CategorySelectButton;
