"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
const vue_router_1 = tslib_1.__importDefault(require("vue-router"));
const Login_vue_1 = tslib_1.__importDefault(require("@/components/Login.vue"));
const Game_vue_1 = tslib_1.__importDefault(require("@/components/Game.vue"));
const Home_vue_1 = tslib_1.__importDefault(require("@/components/Home.vue"));
const store_1 = tslib_1.__importDefault(require("@/store"));
vue_1.default.use(vue_router_1.default);
const checkLogin = function (_to, _from, next) {
    console.log("user:" + store_1.default.getters.username);
    if (!store_1.default.getters.username) {
        next({ name: 'login' });
    }
    else {
        next();
    }
};
const routes = [
    { path: '/', name: 'home', component: Home_vue_1.default, beforeEnter: checkLogin },
    { path: '/game', name: 'game', component: Game_vue_1.default, beforeEnter: checkLogin },
    { path: '/login', name: 'login', component: Login_vue_1.default },
];
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
exports.router = new vue_router_1.default({
    routes // short for `routes: routes`
});
//# sourceMappingURL=index.js.map