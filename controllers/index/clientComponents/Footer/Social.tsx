import React from 'react'
import clientConfig from '../../clientConfig'

const Social = () => {
  return (
    <div className='text-white flex flex-row justify-center items-center gap-5 text-[20px] py-[30px]'>
        <div title="Facebook" className='border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center'><a href={`${clientConfig.aic.facebook}`}><i className="fa-brands fa-facebook"></i></a></div>
        <div title="Instagram" className='border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center'><a href={`${clientConfig.aic.instagram}`}><i className="fa-brands fa-instagram"></i></a></div>
        <div title="Messenger" className='border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center'><a href={`${clientConfig.aic.messenger}`}><i className="fa-brands fa-facebook-messenger"></i></a></div>
        <div title="Phone" className='border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center'><a href={`tel:${clientConfig.aic.phone}`}><i className="fa-solid fa-phone"></i></a></div>
        <div title="Facetime Audio" className='border-white border-[2px] p-[5px] rounded-full size-[40px] flex flex-row justify-center items-center'><a href={`facetime-audio:${clientConfig.aic.email}`}><i className="fa-brands fa-apple"></i></a></div>
    </div>
  )
}

export default Social
