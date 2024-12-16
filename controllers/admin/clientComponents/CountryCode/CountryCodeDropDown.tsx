import { MouseEventHandler, useEffect } from "react"
import { $$ } from "../../../client/src/Web-Development/W"
import codeList from "./codeList"
interface Props {
    container: string
}

const CountryCodeDropDown = ({container}: Props) => {
    // useEffect(() => {
    //     fetch("/controllers/admin/clientComponents/CountryCode/countryCodes.json").then(res => res.json()).then(data => {
    //         let htmlList = '',
    //             htmlCountryCode = '',
    //             index = ''
    //         for (let j = 0; j < data.length; j++) {
    //             htmlList += `<div class="each flex flex-row justify-between p-[5px] cursor-pointer rounded-[10px] hover:bg-[#d9d9d9]" data-index="${j}"><p>${data[j].name}</p><p>${data[j].dial_code}</p></div>`
    //         }
    //         $(".codeList__list").html(htmlList)
    //         $(".codeList__list > .each").click(function(e) {
    //             afterClick(e, data, null)
    //         })
    //         return [data, htmlList]
    //     }).then(([data, iniHtmlList]) => {
    //         const worker = new Worker('/controllers/client/src/dist/client/src/Web-Development/worker.js')
    //         $(".codeList__search > input").on("input", function(e) {
    //             let value = (e.currentTarget as HTMLInputElement).value
    //             worker.postMessage({
    //                 message: "countryCode",
    //                 value: value,
    //                 iniHtmlList: iniHtmlList,
    //                 data: data
    //             })
    //         })
        
    //         worker.onmessage = function(e) {
    //             $(".codeList__list").html(e.data)
    //             $(".codeList__list > .each").click(function(e) {
    //                 afterClick(e, data, iniHtmlList)
    //             })
    //         }


    //         const handleClick = $$({
    //             'trigger': container,
    //             'terminate': container
    //         }, `${container} .codeList`, 'activeFlex').toggle().advanced()
    //     })
        
    //     function afterClick(e: any, data: any, iniHtmlList: any) {
    //         $(container + " .codeList").removeClass("active")
    //         let index = $(e.currentTarget).data("index")
    //         $(e.currentTarget).parent().parent().prev().data("index", index)
    //         let htmlCountryCode = `<div class="flag w-[40px] p-[5px] !flex items-center"><img draggable=false src="/controllers/admin/clientComponents/CountryCode/flags/${data[index].code.toLowerCase()}.png" style="width:100%;height:100%;""></div><p class="code !flex items-center p-[2px]">${data[index].dial_code}</p><i class="fa-solid fa-caret-down !flex items-center p-[2px]"></i>`
    //         $(e.currentTarget).parent().parent().prev().html(htmlCountryCode)
    //         $(".codeList__search > input").val("")
    //         if (iniHtmlList !== null) {
    //             $(".codeList__list").html(iniHtmlList)
    //         }
    //     }
    // }, [])

    const top = {
        top: 'calc(100% + 5px)'
    }

    const countryCodeClickHandler = (e: any) => {
        
    }

    return (
        <div style={top} className="codeList !absolute hidden flex-col left-0 w-full h-[500%] bg-white rounded-[10px] z-[1] p-[5px]">
            <div className="codeList__search">
                <input name = "search" id = "searchCountry" type="text" placeholder="Search Country" />
            </div>
            <div className="codeList__list overflow-auto m-[5px]">
                {codeList.map(country => <div onClick={countryCodeClickHandler} key={country.code} className="each flex flex-row justify-between p-[5px] cursor-pointer rounded-[10px] hover:bg-[#d9d9d9]" data-index={country.code}><p>{country.name}</p><p>{country.dial_code}</p></div>)}
            </div>
        </div>
    )
}

export default CountryCodeDropDown
