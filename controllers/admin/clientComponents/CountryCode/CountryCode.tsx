import CountryCodeDropDown from './CountryCodeDropDown'
import CountryCodeIcon from './CountryCodeIcon'

interface Props {
    container: string
}

const CountryCode = ({container}: Props) => {
    return (
        <>
            <CountryCodeIcon/>
            <CountryCodeDropDown container={container}/>
        </>
    )
}

export default CountryCode