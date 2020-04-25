"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
const App_vue_1 = tslib_1.__importDefault(require("./App.vue"));
const vuetify_1 = tslib_1.__importDefault(require("./plugins/vuetify"));
const routes_1 = require("./routes");
const store_1 = tslib_1.__importDefault(require("./store"));
const vuex_1 = tslib_1.__importDefault(require("vuex"));
require("./scss/main.scss");
vue_1.default.use(vuex_1.default);
vue_1.default.config.productionTip = false;
vue_1.default.use(vuetify_1.default, {
    iconfont: 'fa',
});
new vue_1.default({
    store: store_1.default,
    router: routes_1.router,
    vuetify: vuetify_1.default,
    render: h => h(App_vue_1.default)
}).$mount('#app');
//# sourceMappingURL=main.js.map