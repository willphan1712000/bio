interface List {
    name: string,
    dial_code: string,
    code: string
}

self.onmessage = function(e) {
    const value = e.data.value
    const list = e.data.codeList

    let returnList: Array<List> = []

    const USA: List = {
        code: 'us',
        dial_code: '+1',
        name: 'United States'
    } // exclusively for the United States of America
    if(value.toLocaleLowerCase().includes('us')) {
        returnList.push(USA)
    }
    list.forEach((element: List) => {
        const name = element.name
        const code = element.code
        if(name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || code.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
            returnList.push(element)
        }
    });

    postMessage(returnList)
}