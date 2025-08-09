import { Route as rootRouteImport } from './__root';
import { Route as AtuploadRouteImport } from './@upload';
import { Route as AtpriceRouteImport } from './@price';
import { Route as AtlogoutRouteImport } from './@logout';
import { Route as IndexRouteImport } from './index';
const AtuploadRoute = AtuploadRouteImport.update({
    id: '/@upload',
    path: '/@upload',
    getParentRoute: () => rootRouteImport,
});
const AtpriceRoute = AtpriceRouteImport.update({
    id: '/@price',
    path: '/@price',
    getParentRoute: () => rootRouteImport,
});
const AtlogoutRoute = AtlogoutRouteImport.update({
    id: '/@logout',
    path: '/@logout',
    getParentRoute: () => rootRouteImport,
});
const IndexRoute = IndexRouteImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => rootRouteImport,
});
const rootRouteChildren = {
    IndexRoute: IndexRoute,
    AtlogoutRoute: AtlogoutRoute,
    AtpriceRoute: AtpriceRoute,
    AtuploadRoute: AtuploadRoute,
};
export const routeTree = rootRouteImport
    ._addFileChildren(rootRouteChildren)
    ._addFileTypes();
