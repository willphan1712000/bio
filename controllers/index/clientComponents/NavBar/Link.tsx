import clientConfig from "../../clientConfig"

const Link = () => {
  return (
    <>
        <a href="/@template" className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Templates</a>
        <a href={`${clientConfig.aic.website}/about-us`} className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">About us</a>
        <a href={`${clientConfig.aic.website}/terms`} className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Terms & Privacy</a>
        <a href={`${clientConfig.aic.website}/blog`} className="hover:bg-[#f5f5f7] p-[10px] rounded-[10px]">Blogs</a>
    </>
  )
}

export default Link
