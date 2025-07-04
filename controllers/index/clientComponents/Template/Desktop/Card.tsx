import React from "react"

interface Props extends React.HTMLAttributes<HTMLElement> {
  item: {
    heading: string,
    des: string
  }
}

const Card = React.forwardRef<HTMLDivElement, Props>(( props, ref ) => {
  const { item, ...rest } = props
  return (
    <>
      <div className='h-[100dvh] w-full flex justify-center items-center flex-col text-center p-[20px]' {...rest} ref={ref}>
          <h1 className="text-[30px] font-bold py-2 px-3 text-white bg-[--primary] rounded-full">{item.heading}</h1>
          <p className="text-[25px]">{item.des}</p>
      </div>
    </>
  )
})

export default Card
