import Response from "../../../client/src/Web-Development/components/Response"
import { $$$ } from "../../../client/src/Web-Development/WW"
import handleAdminContext, { handleAdminSaveContext } from "../AdminContext"

export default function Save() {
    const data = handleAdminContext()
    const [state, dispatch] = handleAdminSaveContext()

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        dispatch({type: 'submit'}) // show spinner
        dispatch({type: 'disable'}) // disable submit button
        dispatch({type: 'message', value: 'Uploading...'}) // disable submit button
        try {
          const result = await $$$("/data/api/info/PUT.php", data).api().post() as Response
          if(result.success) {
              dispatch({type: 'submit'}) // hide spinner
              dispatch({type: 'show'}) // show glowing effect
              dispatch({type: 'message', value: 'Updated. Going to your bio'}) // update message
              // Redirect to bio
              setTimeout(() => {
                window.location.href = '/' + data.username
              }, 1500)
          } else {
              dispatch({type: 'message', value: result.error!}) // update message
              dispatch({type: 'submit'}) // hide spinner
              setTimeout(() => {
                dispatch({type: 'disable'}) // enable submit button
                dispatch({type: 'default'}) // update message
              }, 3000)
          }
        } catch (error: any) {
          dispatch({type: 'message', value: error.error!}) // update message
          dispatch({type: 'submit'}) // hide spinner
          setTimeout(() => {
            dispatch({type: 'disable'}) // enable submit button
            dispatch({type: 'default'}) // update message
          }, 3000)
      }
    }
  return (
    <button disabled={state.disabled} className='w-full h-full absolute top-0 left-0' onClick={e => handleSubmit(e)}></button>
  )
}
