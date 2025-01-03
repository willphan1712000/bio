interface List {
    [key: string]: number | string | Array<number>
}

function getList(list: List, itemid: string): List {
    if(itemid !== null) {
        return { [itemid]: 1 }
    }
    return list
}

export function getItems(list: List, itemid: string): Array<any> {
    const items = []
    const processedList = getList(list, itemid)

    for(const key in processedList) {
      items.push({
        id: key,
        quantity: processedList[key],
      })
    }

    return items
}

export function setLocalStorage(user: string, list: List, itemid: string): void {
  localStorage.setItem("purchase", JSON.stringify({
    ...getList(list, itemid),
    user
  }))
}

export function listPush(): List {
  const listPush = {} as List
  const items = [] as Array<number>
  const local = JSON.parse(localStorage.getItem('purchase')!)
  listPush.username = local.user
  delete local.user

  Object.keys(local).forEach(item => items.push(parseInt(item)))
  listPush.templates = items

  return listPush
}

export function getUser(): string {
  return listPush().username as string
}