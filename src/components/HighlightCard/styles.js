"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LastTransition = exports.Amount = exports.Footer = exports.Icon = exports.Title = exports.Header = exports.Container = void 0;
var native_1 = require("styled-components/native");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color:", ";\n    width: ", "px;\n    border-radius:5px;\n    padding:19px 23px;\n    padding-bottom:", "px;\n    margin-right: 16px;\n    \n"], ["\n    background-color:",
    ";\n    width: ", "px;\n    border-radius:5px;\n    padding:19px 23px;\n    padding-bottom:", "px;\n    margin-right: 16px;\n    \n"])), function (_a) {
    var theme = _a.theme, type = _a.type;
    return type === 'total' ? theme.colors.secondary : theme.colors.shape;
}, react_native_responsive_fontsize_1.RFValue(300), react_native_responsive_fontsize_1.RFValue(42));
exports.Header = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex-direction: row;\n    justify-content:space-between;\n"], ["\n    flex-direction: row;\n    justify-content:space-between;\n"])));
exports.Title = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size:", "px;\n    color:", ";\n"], ["\n    font-family: ", ";\n    font-size:", "px;\n    color:",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
}, react_native_responsive_fontsize_1.RFValue(14), function (_a) {
    var theme = _a.theme, type = _a.type;
    return type === 'total' ? theme.colors.shape : theme.colors.text_dark;
});
exports.Icon = native_1["default"](vector_icons_1.Feather)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-size:", "px;\n    ", "\n   ", "\n   ", "\n"], ["\n    font-size:", "px;\n    ",
    "\n   ",
    "\n   ",
    "\n"])), react_native_responsive_fontsize_1.RFValue(40), function (_a) {
    var type = _a.type;
    return type === 'up' && native_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      color:", ";\n   "], ["\n      color:", ";\n   "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.success;
    });
}, function (_a) {
    var type = _a.type;
    return type === 'down' && native_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      color:", ";\n   "], ["\n      color:", ";\n   "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.attention;
    });
}, function (_a) {
    var type = _a.type;
    return type === 'total' && native_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      color:", ";\n   "], ["\n      color:", ";\n   "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.shape;
    });
});
exports.Footer = native_1["default"].View(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""])));
exports.Amount = native_1["default"].Text(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size:", "px;\n    color:", ";\n    margin-top: 38px;\n"], ["\n    font-family: ", ";\n    font-size:", "px;\n    color:",
    ";\n    margin-top: 38px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fonts.medium;
}, react_native_responsive_fontsize_1.RFValue(32), function (_a) {
    var theme = _a.theme, type = _a.type;
    return type === 'total' ? theme.colors.shape : theme.colors.text_dark;
});
exports.LastTransition = native_1["default"].Text(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    font-family: ", ";\n    color:", ";\n"], ["\n    font-family: ", ";\n    color:",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
}, function (_a) {
    var theme = _a.theme, type = _a.type;
    return type === 'total' ? theme.colors.shape : theme.colors.text;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
