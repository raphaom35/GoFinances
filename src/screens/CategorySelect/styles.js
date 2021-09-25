"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonText = exports.Footer = exports.Separator = exports.Name = exports.Icon = exports.Category = exports.Title = exports.Header = exports.Container = void 0;
var native_1 = require("styled-components/native");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
exports.Container = native_1["default"](react_native_gesture_handler_1.GestureHandlerRootView)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex:1;\n    background-color:", ";\n"], ["\n    flex:1;\n    background-color:", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
exports.Header = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width:100%;\n    height:", "px;\n    background-color:", ";\n    align-items:center;\n    justify-content: flex-end;\n    padding-bottom: 19px;\n"], ["\n    width:100%;\n    height:", "px;\n    background-color:", ";\n    align-items:center;\n    justify-content: flex-end;\n    padding-bottom: 19px;\n"])), react_native_responsive_fontsize_1.RFValue(113), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
exports.Title = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color:  ", ";\n    font-size:", "px;\n    font-family: ", ";\n"], ["\n    color:  ", ";\n    font-size:", "px;\n    font-family: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.shape;
}, react_native_responsive_fontsize_1.RFValue(18), function (_a) {
    var theme = _a.theme;
    return theme.fonts.medium;
});
exports.Category = native_1["default"].TouchableOpacity(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 100%;\n    padding: ", "px;\n    flex-direction: row;\n    align-items: center;\n    background-color:", ";\n"], ["\n    width: 100%;\n    padding: ", "px;\n    flex-direction: row;\n    align-items: center;\n    background-color:",
    ";\n"])), react_native_responsive_fontsize_1.RFValue(15), function (_a) {
    var theme = _a.theme, isActive = _a.isActive;
    return isActive ? theme.colors.secondary_light : theme.colors.background;
});
exports.Icon = native_1["default"](vector_icons_1.Feather)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size:", "px;\n    margin-right: 16px;\n"], ["\n    font-size:", "px;\n    margin-right: 16px;\n"])), react_native_responsive_fontsize_1.RFValue(20));
exports.Name = native_1["default"].Text(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size:", "px;\n    font-family: ", ";\n"], ["\n    font-size:", "px;\n    font-family: ", ";\n"])), react_native_responsive_fontsize_1.RFValue(14), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
});
exports.Separator = native_1["default"].Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    height: 1px;\n    width: 100%;\n    background-color:", "\n"], ["\n    height: 1px;\n    width: 100%;\n    background-color:", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text_dark;
});
exports.Footer = native_1["default"].View(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    width:100%;\n    padding: 24px;\n"], ["\n    width:100%;\n    padding: 24px;\n"])));
exports.ButtonText = native_1["default"].Text(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
