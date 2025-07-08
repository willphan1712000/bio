import clientConfig from "../../clientConfig"

const Copyright = () => {
    const copyright = `© ${new Date().getFullYear()} Allinclicks. All rights reserved.`
  return (
    <div className="relative flex flex-col justify-center items-center w-full text-white">
        <p>{copyright}</p>
        <div className="flex flex-row gap-3">
            <a href={`${clientConfig.aic.website}/privacy`} target="">Privacy Policy</a>
            <span> | </span>
            <a href={`${clientConfig.aic.website}/terms`} target="">Terms of Use</a>
        </div>
    </div>
  )
}

export default Copyright
