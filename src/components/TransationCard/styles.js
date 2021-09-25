"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Date = exports.CategoryName = exports.Icon = exports.Category = exports.Footer = exports.Amount = exports.Title = exports.Container = void 0;
var native_1 = require("styled-components/native");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 5px;\n    padding:17px 24px;\n    margin-bottom: 16px;\n"], ["\n    background-color: ", ";\n    border-radius: 5px;\n    padding:17px 24px;\n    margin-bottom: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.shape;
});
exports.Title = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: ", "px;\n    font-family: ", ";\n"], ["\n    font-size: ", "px;\n    font-family: ", ";\n"])), react_native_responsive_fontsize_1.RFValue(14), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
});
exports.Amount = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: ", "px;\n    margin-top:2px;\n    font-family: ", ";\n    color: ", ";\n"], ["\n    font-size: ", "px;\n    margin-top:2px;\n    font-family: ", ";\n    color: ",
    ";\n"])), react_native_responsive_fontsize_1.RFValue(20), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
}, function (_a) {
    var theme = _a.theme, type = _a.type;
    return type === 'positive' ? theme.colors.success : theme.colors.attention;
});
exports.Footer = native_1["default"].View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    margin-top: 19px;\n"], ["\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    margin-top: 19px;\n"])));
exports.Category = native_1["default"].View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    flex-direction: row;\n    align-items: center;\n"], ["\n    flex-direction: row;\n    align-items: center;\n"])));
exports.Icon = native_1["default"](vector_icons_1.Feather)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: ", "px;\n    color: ", ";\n"], ["\n    font-size: ", "px;\n    color: ", ";\n"])), react_native_responsive_fontsize_1.RFValue(20), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
exports.CategoryName = native_1["default"].Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-size: ", "px;\n    color: ", ";\n    margin-left: 17px;\n"], ["\n    font-size: ", "px;\n    color: ", ";\n    margin-left: 17px;\n"])), react_native_responsive_fontsize_1.RFValue(14), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
exports.Date = native_1["default"].Text(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    font-size: ", "px;\n    color: ", ";\n"], ["\n    font-size: ", "px;\n    color: ", ";\n"])), react_native_responsive_fontsize_1.RFValue(14), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
