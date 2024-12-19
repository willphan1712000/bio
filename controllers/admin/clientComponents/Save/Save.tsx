import { useContext, useState } from "react"
import handleAdminContext from "../AdminContext"
import { $$$ } from "../../../client/src/Web-Development/WW"


interface Props {
    setSubmit: (isSubmitting: boolean) => void
    setDone: (isDone: boolean) => void
    setMsg: (msg: string) => void
}

type POST = {
    success : boolean,
    error?: string
}

export default function Save({setSubmit, setDone, setMsg} : Props) {
    const [isSubmitting, setSubmitHandler] = useState(false)
    const data = useContext(handleAdminContext())

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        data.img = ''
        setSubmitHandler(true)
        setSubmit(true)
        const result = await $$$("/data/api/info/PUT.php", data).api().post() as POST
        if(result.success) {
            setSubmitHandler(false)
            setSubmit(false)
            setDone(true)
            setMsg('Updated. Going to your bio')
            setTimeout(() => {
              window.location.href = '/' + data.username
            }, 1500)
        } else {
            setMsg(result.error!)
            setSubmit(false)
            setTimeout(() => {
              setSubmitHandler(false)
              setMsg("Save")
            }, 3000)
        }
    }
  return (
    <button disabled={isSubmitting} className='w-full h-full absolute top-0 left-0' onClick={e => handleSubmit(e)}></button>
  )
}
