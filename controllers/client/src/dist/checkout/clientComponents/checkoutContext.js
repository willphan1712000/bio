"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = getItems;
exports.setLocalStorage = setLocalStorage;
exports.listPush = listPush;
exports.getUser = getUser;
function getList(list, itemid) {
    if (itemid !== null) {
        return { [itemid]: 1 };
    }
    return list;
}
function getItems(list, itemid) {
    const items = [];
    const processedList = getList(list, itemid);
    for (const key in processedList) {
        items.push({
            id: key,
            quantity: processedList[key],
        });
    }
    return items;
}
function setLocalStorage(user, list, itemid) {
    localStorage.setItem("purchase", JSON.stringify(Object.assign(Object.assign({}, getList(list, itemid)), { user })));
}
function listPush() {
    const listPush = {};
    const items = [];
    const local = JSON.parse(localStorage.getItem('purchase'));
    listPush.username = local.user;
    delete local.user;
    Object.keys(local).forEach(item => items.push(parseInt(item)));
    listPush.templates = items;
    return listPush;
}
function getUser() {
    return listPush().username;
}
