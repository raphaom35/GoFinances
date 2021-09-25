"use strict";
exports.__esModule = true;
var react_1 = require("react");
var expo_app_loading_1 = require("expo-app-loading");
var styled_components_1 = require("styled-components");
var poppins_1 = require("@expo-google-fonts/poppins");
var theme_1 = require("./src/global/styles/theme");
var Register_1 = require("./src/screens/Register");
function App() {
    var fontsLoaded = poppins_1.useFonts({
        Poppins_400Regular: poppins_1.Poppins_400Regular,
        Poppins_500Medium: poppins_1.Poppins_500Medium,
        Poppins_700Bold: poppins_1.Poppins_700Bold
    })[0];
    if (!fontsLoaded) {
        return react_1["default"].createElement(expo_app_loading_1["default"], null);
    }
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme_1["default"] },
        react_1["default"].createElement(Register_1.Register, null)));
}
exports["default"] = App;
