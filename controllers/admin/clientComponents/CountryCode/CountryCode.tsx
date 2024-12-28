import { useEffect, useRef, useState } from 'react'
import CountryCodeDropDown from './CountryCodeDropDown'
import CountryCodeIcon from './CountryCodeIcon'

type Code = {
    code: string,
    flag: string
}

const CountryCode = () => {
    const [isListShown, setShown] = useState<boolean>(false)
    const listRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)

    function setDropDown() {
        setShown(!isListShown)
    }

    useEffect(() => {
        const handler = (e: any) => {
            if(!listRef.current?.contains(e.target as Node) && !buttonRef.current?.contains(e.target as Node)) {
                setShown(false)
            }
        }

        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])
    
    return (
        <>
            <CountryCodeIcon onCallBack={setDropDown} buttonRef={buttonRef}/>
            <CountryCodeDropDown setDropDown={setDropDown} isListShown={isListShown} listRef={listRef}/>
        </>
    )
}

export default CountryCode