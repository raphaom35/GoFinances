"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Title = exports.Container = void 0;
var native_1 = require("styled-components/native");
var react_native_1 = require("react-native");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
exports.Container = native_1["default"](react_native_1.TouchableOpacity)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    background-color:", ";\n    border-radius: 5px;\n    padding:18px;\n    align-items: center;\n"], ["\n    width: 100%;\n    background-color:", ";\n    border-radius: 5px;\n    padding:18px;\n    align-items: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
});
exports.Title = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-family: ", ";\n    color:  ", ";\n    font-size:", "px;\n"], ["\n    font-family: ", ";\n    color:  ", ";\n    font-size:", "px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fonts.medium;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.shape;
}, react_native_responsive_fontsize_1.RFValue(14));
var templateObject_1, templateObject_2;
