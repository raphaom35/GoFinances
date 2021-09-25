"use strict";
exports.__esModule = true;
exports.TransitionsCards = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function TransitionsCards(_a) {
    var data = _a.data;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Title, null, data.title),
        react_1["default"].createElement(styles_1.Amount, { type: data.type },
            data.type === 'negative' && '- ',
            data.amount),
        react_1["default"].createElement(styles_1.Footer, null,
            react_1["default"].createElement(styles_1.Category, null,
                react_1["default"].createElement(styles_1.Icon, { name: data.category.icon }),
                react_1["default"].createElement(styles_1.CategoryName, null, data.category.name)),
            react_1["default"].createElement(styles_1.Date, null, data.date))));
}
exports.TransitionsCards = TransitionsCards;
