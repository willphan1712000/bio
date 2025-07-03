import { Button } from '@willphan1712000/w'
import Logo from '../Logo'
import Info from './Info'
import Social from './Social'
import Copyright from './Copyright'

const Footer = () => {
    return (
            <div className='bg-[#111113] mt-5 p-[30px] w-full flex flex-row justify-center'>
                <div className=' max-w-[1000px]'>
                    <div className='flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start'>
                        <div className='flex-1 w-[50%] max-w-[300px]'><Logo /></div>
                        <Info />
                        <div className='flex flex-[2] flex-col items-center gap-5'>
                            <Button onClick={() => window.location.href = '/@template'} type="gradient" content='Templates'/>

                            <div className='flex flex-row gap-4'>
                                <Button onClick={() => window.location.href = '/@signin'} type="solid" content='Sign in'/>
                                <Button onClick={() => window.location.href = '/@signup'} type="solid" content='Sign up'/>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-[1px] border-b-white p-10'></div>
                    <Social />
                    <Copyright />
                </div>
            </div>
    )
}

export default Footer
