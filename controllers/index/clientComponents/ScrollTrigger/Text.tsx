import React from 'react'

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string,
  pointerDirection?: | "left" | "right" | "up" | "down"
}

const Text = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  const {text, pointerDirection = 'up', ...rest} = props

  if(pointerDirection === 'right')
    return (
        <div ref={ref} {...rest}>
          <p className='text-[20px] text-black'>{text}</p>
          <div className={`absolute top-[100px] left-[150px]`}>
              <div className="w-[150px] h-[1px] bg-black"></div>
              <div className={`rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] right-[-8px]`}></div>
          </div>
        </div>
    )

  if(pointerDirection === 'left')
    return (
        <div ref={ref} {...rest}>
          <p className='text-[20px] text-black'>{text}</p>
          <div className={`absolute top-[100px] right-[200px]`}>
              <div className="w-[150px] h-[1px] bg-black"></div>
              <div className={`rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] left-[-8px]`}></div>
          </div>
        </div>
    )

    if(pointerDirection === 'up')
      return (
        <div ref={ref} {...rest}>
          <p className='text-[20px] text-black'>{text}</p>
          <div className={`absolute bottom-[250px] -rotate-90`}>
              <div className="w-[150px] h-[1px] bg-black"></div>
              <div className={`rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] right-[-8px]`}></div>
          </div>
        </div>
      )

    if(pointerDirection === 'down')
      return (
        <div ref={ref} {...rest}>
          <p className='text-[20px] text-black'>{text}</p>
          <div className={`absolute top-[100px] right-[200px]`}>
              <div className="w-[150px] h-[1px] bg-black"></div>
              <div className={`rounded-full w-[16px] h-[16px] bg-black absolute top-[-8px] left-[-8px]`}></div>
          </div>
        </div>
      )

})

export default Text
