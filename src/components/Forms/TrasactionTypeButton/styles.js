"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Title = exports.Icon = exports.Container = void 0;
var native_1 = require("styled-components/native");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
exports.Container = native_1["default"](react_native_1.TouchableOpacity)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 48%;\n    flex-direction: row;\n    align-items: center;\n    justify-content:center;\n    border-width: ", "px ;\n    border-style: solid;\n    border-color: ", ";\n    border-radius: 5px;\n    padding:16px;\n   ", "\n   ", "\n"], ["\n    width: 48%;\n    flex-direction: row;\n    align-items: center;\n    justify-content:center;\n    border-width: ", "px ;\n    border-style: solid;\n    border-color: ", ";\n    border-radius: 5px;\n    padding:16px;\n   ",
    "\n   ",
    "\n"])), function (_a) {
    var isActive = _a.isActive, type = _a.type;
    return isActive ? 0 : 1.5;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var isActive = _a.isActive, type = _a.type;
    return isActive && type == 'down' && native_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject([" \n        background-color:  ", ";\n   "], [" \n        background-color:  ", ";\n   "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.attention_light;
    });
}, function (_a) {
    var isActive = _a.isActive, type = _a.type;
    return isActive && type == 'up' && native_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject([" \n        background-color:  ", ";\n   "], [" \n        background-color:  ", ";\n   "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.success_light;
    });
});
exports.Icon = native_1["default"](vector_icons_1.Feather)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-size:", "px;\n    margin-right: 12px;\n    color:  ", ";\n"], ["\n    font-size:", "px;\n    margin-right: 12px;\n    color:  ",
    ";\n"])), react_native_responsive_fontsize_1.RFValue(24), function (_a) {
    var theme = _a.theme, type = _a.type;
    return type === 'up' ? theme.colors.success : theme.colors.attention;
});
exports.Title = native_1["default"].Text(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size:", "px;\n    font-family: ", ";\n    color:  ", ";\n"], ["\n    font-size:", "px;\n    font-family: ", ";\n    color:  ", ";\n"])), react_native_responsive_fontsize_1.RFValue(14), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text_dark;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
