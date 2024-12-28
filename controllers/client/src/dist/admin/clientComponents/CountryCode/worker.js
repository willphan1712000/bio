"use strict";
self.onmessage = function (e) {
    const value = e.data.value;
    const list = e.data.codeList;
    let returnList = [];
    const USA = {
        code: 'us',
        dial_code: '+1',
        name: 'United States'
    };
    if (value.toLocaleLowerCase().includes('us')) {
        returnList.push(USA);
    }
    list.forEach((element) => {
        const name = element.name;
        const code = element.code;
        if (name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || code.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
            returnList.push(element);
        }
    });
    postMessage(returnList);
};
