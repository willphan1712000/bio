"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTree = void 0;
const __root_1 = require("./__root");
const profile_1 = require("./profile");
const index_1 = require("./index");
const ProfileRoute = profile_1.Route.update({
    id: '/profile',
    path: '/profile',
    getParentRoute: () => __root_1.Route,
});
const IndexRoute = index_1.Route.update({
    id: '/',
    path: '/',
    getParentRoute: () => __root_1.Route,
});
const rootRouteChildren = {
    IndexRoute: IndexRoute,
    ProfileRoute: ProfileRoute,
};
exports.routeTree = __root_1.Route
    ._addFileChildren(rootRouteChildren)
    ._addFileTypes();
