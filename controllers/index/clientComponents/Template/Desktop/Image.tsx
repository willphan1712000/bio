import React from "react"

interface Props extends React.HTMLAttributes<HTMLImageElement> {
    url: string
}

const Image = React.forwardRef<HTMLImageElement, Props>((props, ref) => {
    const { url } = props
    
    return (
        <div className="absolute top-0 opacity-0 size-full p-10 flex flex-row items-center h-[100vh] overflow-hidden" ref={ref}>
            <div className="overflow-hidden rounded-3xl size-full">
                <img src={url} className="size-full object-cover" draggable="false" />
            </div>
        </div>
    )
})

export default Image
