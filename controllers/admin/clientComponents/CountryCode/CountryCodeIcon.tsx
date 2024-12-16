

const CountryCodeIcon = () => {
  return (
    <div className="countryCode p-[2px] flex flex-row rounded-[10px] bg-white h-auto mr-[5px] cursor-pointer" data-index data-flag data-code>
        <div className="flag w-[40px] p-[5px] !flex items-center">
            <img draggable={false} className='w-full h-full' />
        </div>
        <p className="code !flex items-center p-[2px]"></p>
        <i className="fa-solid fa-caret-down !flex items-center p-[2px]"></i>
    </div>
  )
}

export default CountryCodeIcon
