import { username } from '../AdminContext'

const Bio = () => {
  return (
    <div>
      <a href={`/${username()}`} className="p-[15px] bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center no-underline text-black cursor-pointer" style={{
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        }}><i className="fa-solid fa-arrow-left"></i></a>
    </div>
  )
}

export default Bio
