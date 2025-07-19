"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTree = void 0;
const __root_1 = require("./__root");
const _upload_1 = require("./@upload");
const _price_1 = require("./@price");
const index_1 = require("./index");
const AtuploadRoute = _upload_1.Route.update({
    id: '/@upload',
    path: '/@upload',
    getParentRoute: () => __root_1.Route,
});
const AtpriceRoute = _price_1.Route.update({
    id: '/@price',
    path: '/@price',
    getParentRoute: () => __root_1.Route,
});
const IndexRoute = index_1.Route.update({
    id: '/',
    path: '/',
    getParentRoute: () => __root_1.Route,
});
const rootRouteChildren = {
    IndexRoute: IndexRoute,
    AtpriceRoute: AtpriceRoute,
    AtuploadRoute: AtuploadRoute,
};
exports.routeTree = __root_1.Route
    ._addFileChildren(rootRouteChildren)
    ._addFileTypes();
