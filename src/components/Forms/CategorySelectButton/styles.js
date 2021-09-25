"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Icon = exports.Category = exports.Container = void 0;
var native_1 = require("styled-components/native");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
exports.Container = native_1["default"].TouchableOpacity.attrs({
    activeOpacity: 0.7
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color:", ";\n  flex-direction: row;\n  justify-content:space-between;\n  align-items:center;\n  border-radius: 5px; \n  padding:18px 16px; \n"], ["\n  background-color:", ";\n  flex-direction: row;\n  justify-content:space-between;\n  align-items:center;\n  border-radius: 5px; \n  padding:18px 16px; \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.shape;
});
exports.Category = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-family:", ";\n    font-size:", "px;\n    \n"], ["\n    font-family:", ";\n    font-size:", "px;\n    \n"])), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
}, react_native_responsive_fontsize_1.RFValue(14));
exports.Icon = native_1["default"](vector_icons_1.Feather)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size:", "px;\n    color:", ";\n"], ["\n    font-size:", "px;\n    color:", ";\n"])), react_native_responsive_fontsize_1.RFValue(20), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1, templateObject_2, templateObject_3;
