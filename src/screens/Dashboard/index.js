"use strict";
exports.__esModule = true;
exports.Dashboard = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var HighlightCard_1 = require("../../components/HighlightCard");
var TransationCard_1 = require("../../components/TransationCard");
var styles_1 = require("./styles");
var data = [
    {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
            name: "Vendas",
            icon: "dollar-sign"
        },
        date: "13/04/2020"
    },
    {
        id: '2',
        type: 'negative',
        title: "Hamburgueria Pizzy",
        amount: "R$ 59,00",
        category: {
            name: "Alimentação",
            icon: "coffee"
        },
        date: "13/04/2020"
    },
    {
        id: '3',
        type: 'negative',
        title: "Aluguel do apartamento",
        amount: "R$ 1.200,00",
        category: {
            name: "Casa",
            icon: "shopping-bag"
        },
        date: "27/03/2020"
    },
];
function Dashboard() {
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Header, null,
            react_1["default"].createElement(styles_1.UserWrapper, null,
                react_1["default"].createElement(styles_1.UserInfo, null,
                    react_1["default"].createElement(styles_1.Photo, { source: { uri: 'https://github.com/raphaom35.png' } }),
                    react_1["default"].createElement(styles_1.User, null,
                        react_1["default"].createElement(styles_1.UserGreeting, null, "Ola, "),
                        react_1["default"].createElement(styles_1.UserName, null, "Raphael"))),
                react_1["default"].createElement(styles_1.Icon, { name: "power" }))),
        react_1["default"].createElement(styles_1.HighlightCards, null,
            react_1["default"].createElement(HighlightCard_1.HighlightCard, { title: "Entradas", amount: "R$ 17.400,00", type: "up", lastTransaction: "\u00DAltima entrada dia 13 de abril" }),
            react_1["default"].createElement(HighlightCard_1.HighlightCard, { title: "Sa\u00EDdas", amount: "R$ 1.259,00", lastTransaction: "\u00DAltima sa\u00EDda dia 03 de abril", type: "down" }),
            react_1["default"].createElement(HighlightCard_1.HighlightCard, { title: "Total", amount: "R$ 16.141,00", lastTransaction: "01 \u00E0 16 de abril", type: "total" })),
        react_1["default"].createElement(styles_1.Transitions, null,
            react_1["default"].createElement(styles_1.Title, null, "Listagem"),
            react_1["default"].createElement(styles_1.TransitionList, { data: data, keyExtractor: function (item) { return item.id; }, renderItem: function (_a) {
                    var item = _a.item;
                    return react_1["default"].createElement(TransationCard_1.TransitionsCards, { data: item });
                } }))));
}
exports.Dashboard = Dashboard;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cecece'
    }
});
