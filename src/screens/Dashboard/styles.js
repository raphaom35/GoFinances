"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TransitionList = exports.Title = exports.Transitions = exports.HighlightCards = exports.Icon = exports.UserName = exports.UserGreeting = exports.User = exports.Photo = exports.UserInfo = exports.UserWrapper = exports.Header = exports.Container = void 0;
var native_1 = require("styled-components/native");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n flex:1;\n background-color:", ";\n"], ["\n flex:1;\n background-color:", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
exports.Header = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width:100%;\n    height:", "px;\n    background-color: ", ";\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: row;\n\n"], ["\n    width:100%;\n    height:", "px;\n    background-color: ", ";\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: row;\n\n"])), react_native_responsive_fontsize_1.RFPercentage(42), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
exports.UserWrapper = native_1["default"].View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 100%;\n\n    padding:0 24px;\n    margin-top: ", "px;\n\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n"], ["\n    width: 100%;\n\n    padding:0 24px;\n    margin-top: ", "px;\n\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n"])), react_native_iphone_x_helper_1.getStatusBarHeight() + react_native_responsive_fontsize_1.RFValue(28));
exports.UserInfo = native_1["default"].View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex-direction: row;\n    align-items: center;   \n"], ["\n    flex-direction: row;\n    align-items: center;   \n"])));
exports.Photo = native_1["default"].Image(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: ", "px;\n    height: ", "px;\n    border-radius:10px;\n"], ["\n    width: ", "px;\n    height: ", "px;\n    border-radius:10px;\n"])), react_native_responsive_fontsize_1.RFValue(48), react_native_responsive_fontsize_1.RFValue(48));
exports.User = native_1["default"].View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    margin-left: 17px;\n"], ["\n    margin-left: 17px;\n"])));
exports.UserGreeting = native_1["default"].Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    color:  ", ";\n    font-size:", "px;\n    font-family: ", ";\n"], ["\n    color:  ", ";\n    font-size:", "px;\n    font-family: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.shape;
}, react_native_responsive_fontsize_1.RFValue(18), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
});
exports.UserName = native_1["default"].Text(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    color:  ", ";\n    font-size:", "px;\n    font-family: ", ";\n\n"], ["\n    color:  ", ";\n    font-size:", "px;\n    font-family: ", ";\n\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.shape;
}, react_native_responsive_fontsize_1.RFValue(18), function (_a) {
    var theme = _a.theme;
    return theme.fonts.bold;
});
exports.Icon = native_1["default"](vector_icons_1.Feather)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", "px;\n\n"], ["\n    color: ", ";\n    font-size: ", "px;\n\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, react_native_responsive_fontsize_1.RFValue(24));
exports.HighlightCards = native_1["default"].ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    width: 100%;\n    position: absolute;\n    margin-top:", "px;\n"], ["\n    width: 100%;\n    position: absolute;\n    margin-top:", "px;\n"])), react_native_responsive_fontsize_1.RFPercentage(20));
exports.Transitions = native_1["default"].View(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    flex:1%;\n    padding:0 24px;\n    margin-top: ", "px;\n"], ["\n    flex:1%;\n    padding:0 24px;\n    margin-top: ", "px;\n"])), react_native_responsive_fontsize_1.RFPercentage(12));
exports.Title = native_1["default"].Text(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    font-size:", "px;\n    font-family: ", ";\n    margin-bottom: 16px;\n"], ["\n    font-size:", "px;\n    font-family: ", ";\n    margin-bottom: 16px;\n"])), react_native_responsive_fontsize_1.RFValue(18), function (_a) {
    var theme = _a.theme;
    return theme.fonts.regular;
});
exports.TransitionList = native_1["default"](react_native_1.FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: react_native_iphone_x_helper_1.getBottomSpace()
    }
})(templateObject_13 || (templateObject_13 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
