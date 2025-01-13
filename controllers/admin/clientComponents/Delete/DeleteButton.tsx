import { handleAdminDeleteContext } from "../AdminContext"

const DeleteButton = () => {
  const [, dispatch] = handleAdminDeleteContext()

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    dispatch({type: 'show'})
    $("body").css({
        overflow: "hidden"
    })
  }

  return (
    <button onClick={(e) => handleClick(e)} className="rounded-xl bg-red-500 p-2 text-[13px] font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200">
  Delete Account
</button>
  )
}

export default DeleteButton