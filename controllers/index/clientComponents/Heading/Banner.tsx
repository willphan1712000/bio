import clientConfig from "../../clientConfig"
import AppImage from "../AppImage"
import Signin from "../Signin"
import Template from "../Template"

const Banner = () => {
  return (
    <div className="lg:p-[100px] p-[40px] flex flex-row justify-center max-w-[1500px]">
      <div className='flex lg:flex-row flex-col content-center w-full justify-between items-center'>
        <div className='flex flex-col lg:w-[70%] w-full'>
          <h1 className="text-[50px] font-bold">{clientConfig.heading.title}</h1>
          <p className="text-[25px] font-bold">{clientConfig.heading.des1}<span className="text-[25px] font-bold py-2 px-3 text-white bg-[--primary] rounded-full whitespace-nowrap overflow-hidden text-ellipsis">{clientConfig.heading.desSpan}</span>{clientConfig.heading.des2}</p>
          <div className="flex lg:flex-row flex-col gap-5 pt-10 items-center">
              <div className="w-fit">
                <Signin content='Create Your Profile Now' />
              </div>
              <div className="w-fit">
                <Template content="Explore Templates" />
              </div>
          </div>
        </div>
        <div className="w-[20%] rounded-[40px] overflow-hidden lg:flex hidden max-w-[400px]">
          <AppImage src="/controllers/client/img/ip.png" className="size-full"/>
        </div>
      </div>
    </div>
  )
}

export default Banner
