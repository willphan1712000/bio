import { ChangeEvent, useContext, useState } from "react"
import codeList from "./codeList"
import handleAdminContext, { handleAdminElementContext } from "../AdminContext"

type Code = {
    code: string,
    flag: string
}

type List = {
    name: string,
    dial_code: string,
    code: string
}

interface Props {
    isListShown: boolean,
    listRef: React.RefObject<HTMLDivElement>,
    setDropDown: () => void
}

const CountryCodeDropDown = ({isListShown, listRef, setDropDown}: Props) => {
    const data = useContext(handleAdminContext())
    const name = useContext(handleAdminElementContext())

    const [list, setList] = useState<Array<List>>(codeList)
    const [value, setValue] = useState<string>('')

    const top = {
        top: 'calc(100% + 5px)'
    }

    defaultValue()

    function defaultValue(): void {
        switch(name) {
            case 'Mobile':
                if(data['MobileCode'] === null || data['MobileCode'] === '' || data['MobileFlag'] === null || data['MobileFlag'] === '') {
                    setCountryCode({code: '+1', flag: 'us'})
                }
                break
            case 'Work':
                if(data['WorkCode'] === null || data['WorkCode'] === '' || data['WorkFlag'] === null || data['WorkFlag'] === '') {
                    setCountryCode({code: '+1', flag: 'us'})
                }
                break
            default:
                break
        }
    }

    function setCountryCode({flag, code}: Code): void {
        switch(name) {
            case 'Mobile':
                data['MobileCode'] = code
                data['MobileFlag'] = flag
                break
            case 'Work':
                data['WorkCode'] = code
                data['WorkFlag'] = flag
                break
            default:
                break
        }
    }

    const countryCodeClickHandler = ({dial_code, code}: List) => {
        setCountryCode({flag: code, code: dial_code})
        setDropDown()
    }

    const worker = new Worker('/controllers/client/src/dist/admin/clientComponents/CountryCode/worker.js')
    
    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        setValue(value)

        worker.postMessage({
            value,
            codeList
        })

    }
    worker.onmessage = function(e) {
        setList(e.data)
    }

    return (
        isListShown && (<div style={top} className="flex codeList !absolute flex-col left-0 h-[500%] bg-white rounded-[10px] z-[999] p-[5px]" ref={listRef}>
            <div className="codeList__search">
                <input onChange={onSearch} name = "search" id = "searchCountry" type="text" placeholder="Search Country" defaultValue={value}/>
            </div>
            <div className="codeList__list overflow-auto m-[5px]">
                {list.map(country => <div onClick={() => countryCodeClickHandler(country)} key={country.code} className="each flex flex-row justify-between p-[5px] cursor-pointer rounded-[10px] hover:bg-[#d9d9d9]" data-flag={country.code}><p>{country.name}</p><p>{country.dial_code}</p></div>)}
            </div>
        </div>)
    )
}

export default CountryCodeDropDown