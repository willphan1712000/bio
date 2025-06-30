import clientConfig from '../../clientConfig'

const Info = () => {
  return (
    <div className='flex flex-[2] flex-col items-start text-white text-[16px]'>
        <p className='text-[20px]'>Contact Us</p>
        <p>Facetime: <a href={`facetime-audio:${clientConfig.aic.email}`}>{clientConfig.aic.phone}</a></p>
        <p>Email: <a href={`mailto:${clientConfig.aic.email}`}>{clientConfig.aic.email}</a></p>
        <p>Address: <a href={`https://google.com/maps?q=${clientConfig.aic.address}`}>{clientConfig.aic.address}</a></p>
        <p>Website: <a href={`${clientConfig.aic.website}`}>{clientConfig.aic.website}</a></p>
    </div>
  )
}

export default Info