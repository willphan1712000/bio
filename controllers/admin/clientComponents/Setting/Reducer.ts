import { SettingAction, SettingState } from "../AdminContext";

export default function reducer(state: SettingState, action: SettingAction): SettingState {
    switch(action.type) {
        case 'background':
            return {
                background: true,
                font: false,
                fontSize: false,
                fontColor: false,
                input: false,
                inputName: ''

            }
        case 'font':
            return {
                background: false,
                font: true,
                fontSize: false,
                fontColor: false,
                input: false,
                inputName: ''
            }
        case 'fontSize':
            return {
                background: false,
                font: false,
                fontColor: false,
                fontSize: true,
                input: false,
                inputName: ''
            }
        case 'fontColor':
            return {
                background: false,
                font: false,
                fontSize: false,
                fontColor: true,
                input: false,
                inputName: ''
            }
        case 'input':
            return {
                ...state,
                background: false,
                font: false,
                fontSize: false,
                fontColor: false,
                input: true
            }
        case 'inputName':
            return {
                ...state,
                inputName: action.value as string
            }
        case 'all':
            return {
                background: false,
                font: false,
                fontSize: false,
                fontColor: false,
                input: false,
                inputName: ''
            }
        default:
            throw new Error("Action type is undefined")
    }
}

type Result = {
    status: boolean,
    element: string
  }

export function elementClicked(data : {
    [key: string]: string
  }, element: HTMLElement): Result {
    const props = Object.keys(data) // get list of all properties of the data object
    let result: Result = {
        status: false,
        element: ''
    }

    for(let i = 0; i < props.length; i++) {
        if(['name', 'position', 'organization', 'description'].includes(props[i])) continue
        
        document.querySelectorAll(`[data-name=${props[i]}]`).forEach(item => {
            if(item.contains(element)) {
                result = {
                    status: true,
                    element: props[i],
                }
                return
            }
        })
    }

    return result
  }