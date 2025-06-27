import Logo from '../Logo'
import TemplateButton from '../TemplateButton'
import Info from './Info'
import Social from './Social'

const Footer = () => {
    return (
        <div className='bg-black mt-5 p-[30px] w-full flex flex-row justify-center'>
            <div className=' max-w-[1000px]'>
                <div className='flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start'>
                    <div className='flex-1 w-[50%] max-w-[300px]'><Logo /></div>
                    <Info />
                    <div className='flex flex-[2] flex-col items-center gap-5'>
                        <TemplateButton  onClick={() => window.location.href = '/@template'}/>
                        <div className='flex flex-row gap-4'>
                            <TemplateButton content='Sign In' onClick={() => window.location.href = '/@signin'}/>
                            <TemplateButton content='Sign Up' onClick={() => window.location.href = '/@signup'}/>
                        </div>
                    </div>
                </div>
                <Social />
            </div>
        </div>
    )
}

export default Footer
