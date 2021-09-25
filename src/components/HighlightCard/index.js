"use strict";
exports.__esModule = true;
exports.HighlightCard = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
var icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
};
function HighlightCard(_a) {
    var title = _a.title, amount = _a.amount, lastTransaction = _a.lastTransaction, type = _a.type;
    return (react_1["default"].createElement(styles_1.Container, { type: type },
        react_1["default"].createElement(styles_1.Header, null,
            react_1["default"].createElement(styles_1.Title, { type: type }, title),
            react_1["default"].createElement(styles_1.Icon, { name: icon[type], type: type })),
        react_1["default"].createElement(styles_1.Footer, null,
            react_1["default"].createElement(styles_1.Amount, { type: type }, amount),
            react_1["default"].createElement(styles_1.LastTransition, { type: type }, lastTransaction))));
}
exports.HighlightCard = HighlightCard;
