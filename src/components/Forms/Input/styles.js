"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = void 0;
var native_1 = require("styled-components/native");
var react_native_1 = require("react-native");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
exports.Container = native_1["default"](react_native_1.TextInput)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width:100%;\n    padding: 16px 16px;\n    font-size:", "px;\n    background-color:", ";\n    color:  ", ";\n    border-radius: 5px;\n    margin-bottom: 8px;\n    font-family: ", ";\n"], ["\n    width:100%;\n    padding: 16px 16px;\n    font-size:", "px;\n    background-color:", ";\n    color:  ", ";\n    border-radius: 5px;\n    margin-bottom: 8px;\n    font-family: ", ";\n"])), react_native_responsive_fontsize_1.RFValue(14), function (_a) {
    var theme = _a.theme;
    return theme.colors.shape;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text_dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
});
var templateObject_1;
