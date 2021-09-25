"use strict";
exports.__esModule = true;
exports.CategorySelect = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Button_1 = require("../../components/Forms/Button");
var categories_1 = require("../../utils/categories");
var styles_1 = require("./styles");
function CategorySelect(_a) {
    var category = _a.category, setCategory = _a.setCategory, closeSelectCategory = _a.closeSelectCategory;
    function handleCategorySelect(category) {
        setCategory(category);
    }
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Header, null,
            react_1["default"].createElement(styles_1.Title, null, "Categoria")),
        react_1["default"].createElement(react_native_1.FlatList, { data: categories_1.categories, style: { flex: 1, width: '100%' }, keyExtractor: function (item) { return item.key; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(styles_1.Category, { onPress: function () { return handleCategorySelect(item); }, isActive: category.key === item.key },
                    react_1["default"].createElement(styles_1.Icon, { name: item.icon }),
                    react_1["default"].createElement(styles_1.Name, null, item.name)));
            }, ItemSeparatorComponent: function () { return react_1["default"].createElement(styles_1.Separator, null); } }),
        react_1["default"].createElement(styles_1.Footer, null,
            react_1["default"].createElement(Button_1.Button, { title: 'Selecionar', onPress: closeSelectCategory }))));
}
exports.CategorySelect = CategorySelect;
