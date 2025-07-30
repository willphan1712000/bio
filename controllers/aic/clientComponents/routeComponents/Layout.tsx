import React from 'react'
import useThemeContext from '../../../client/clientComponents/context/theme'

interface Props {
    children?: React.ReactNode
    heading?: string
}

const Layout = ({ children, heading }: Props ) => {
    const theme = useThemeContext()
    const headingClasses = `${theme.classes.text} pt-[100px] p-5 w-full md:w-fit md:p-10`
    return (
        <div className={headingClasses}>
            <h1 className="text-[2rem] p-5">{heading}</h1>
            { children }
        </div>
    )
}

export default Layout
