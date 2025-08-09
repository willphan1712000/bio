export default function reducer(state, action) {
    switch (action.type) {
        case 'background':
            return {
                background: true,
                font: false,
                fontSize: false,
                fontColor: false,
                input: false,
                inputName: ''
            };
        case 'font':
            return {
                background: false,
                font: true,
                fontSize: false,
                fontColor: false,
                input: false,
                inputName: ''
            };
        case 'fontSize':
            return {
                background: false,
                font: false,
                fontColor: false,
                fontSize: true,
                input: false,
                inputName: ''
            };
        case 'fontColor':
            return {
                background: false,
                font: false,
                fontSize: false,
                fontColor: true,
                input: false,
                inputName: ''
            };
        case 'input':
            return Object.assign(Object.assign({}, state), { background: false, font: false, fontSize: false, fontColor: false, input: true });
        case 'inputName':
            return Object.assign(Object.assign({}, state), { inputName: action.value });
        case 'all':
            return {
                background: false,
                font: false,
                fontSize: false,
                fontColor: false,
                input: false,
                inputName: ''
            };
        default:
            throw new Error("Action type is undefined");
    }
}
export function elementClicked(data, element) {
    const props = Object.keys(data);
    let result = {
        status: false,
        element: ''
    };
    for (let i = 0; i < props.length; i++) {
        if (['name', 'position', 'organization', 'description'].includes(props[i]))
            continue;
        document.querySelectorAll(`[data-name=${props[i]}]`).forEach(item => {
            if (item.contains(element)) {
                result = {
                    status: true,
                    element: props[i],
                };
                return;
            }
        });
    }
    return result;
}
