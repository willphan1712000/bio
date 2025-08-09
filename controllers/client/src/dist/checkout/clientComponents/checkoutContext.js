function getList(list, itemid) {
    if (itemid !== null) {
        return { [itemid]: 1 };
    }
    return list;
}
export function getItems(list, itemid) {
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
export function setLocalStorage(user, list, itemid) {
    localStorage.setItem("purchase", JSON.stringify(Object.assign(Object.assign({}, getList(list, itemid)), { user })));
}
export function listPush() {
    const listPush = {};
    const items = [];
    const local = JSON.parse(localStorage.getItem('purchase'));
    listPush.username = local.user;
    delete local.user;
    Object.keys(local).forEach(item => items.push(parseInt(item)));
    listPush.templates = items;
    return listPush;
}
export function getUser() {
    return listPush().username;
}
