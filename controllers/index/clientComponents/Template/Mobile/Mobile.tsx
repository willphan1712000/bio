import clientConfig from "../../../clientConfig"

const Mobile = () => {
  return (
    <div className="lg:hidden flex">
      <div className='h-[100dvh] w-full flex justify-center items-center'>
        <h1>{clientConfig.templates.basic.heading}</h1>
        <p>{clientConfig.templates.basic.des}</p>
      </div>
      <div className='h-[100dvh] w-full flex justify-center items-center'>
        <h1>{clientConfig.templates.basic.heading}</h1>
        <p>{clientConfig.templates.basic.des}</p>
      </div>
    </div>
  )
}

export default Mobile
