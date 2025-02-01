import Response from "../../../client/src/Web-Development/components/Response"
import { $$$ } from "../../../client/src/Web-Development/WW"
import { handleAdminCssContext, username } from "../AdminContext"

const Reset = () => {
  const css = handleAdminCssContext()!

  async function handleClick() {
    const [error, result] = await $$$().wPromise().Try($$$("/data/api/style/RESET.php", {
      username: username()
    }).api().post<Response>())

    if(error) {
      alert(error.error)
    }

    if(!result?.success) {
      alert(result?.error)
    }

    css.background = result?.data.background
    css.font = result?.data.font
    css.fontColor = result?.data.fontColor
    css.fontSize = result?.data.fontSize

    $("#template__background").css({
      background: result?.data.background
    })
    $(".template__font").css({
      fontFamily: result?.data.font,
      color: result?.data.fontColor,
      fontSize: result?.data.fontSize
    })
    $(".template_name").css('font-size', (parseInt(result?.data.fontSize.replace('px', '')) + 15))
  }

  return (
    <>
      <button onClick={handleClick} className='reset flex justify-center items-center flex-shrink-0 cursor-pointer h-fit typebox'><i className="fa-solid fa-circle-arrow-left mr-[5px]"></i> Reset</button>
    </>
  )
}

export default Reset
