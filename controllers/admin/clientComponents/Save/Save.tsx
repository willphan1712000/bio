import { $$$ } from "../../../client/src/Web-Development/WW"
import handleAdminContext, { handleAdminCssContext, handleAdminSaveContext } from "../AdminContext"
import { pushCSS, pushData } from "../FetchData"

export default function Save() {
    const data = handleAdminContext()
    const css = handleAdminCssContext()
    const [state, dispatch] = handleAdminSaveContext()

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        dispatch({type: 'submit'}) // show spinner
        dispatch({type: 'disable'}) // disable submit button
        dispatch({type: 'message', value: 'Uploading...'}) // disable submit button

        const listOfPromises = [() => pushData(data)]

        if(css !== null) {
          listOfPromises.push(() => pushCSS(css))
        }

        const [error, result] = await $$$().wPromise().handlePromiseAllSettledResponse(listOfPromises)

        // Handle api call error
        if(error) {
          dispatch({type: 'message', value: error.error!}) // update message
          dispatch({type: 'submit'}) // hide spinner
          setTimeout(() => {
            dispatch({type: 'disable'}) // enable submit button
            dispatch({type: 'default'}) // update message
          }, 3000)

          return
        }
        
        if(!result) return 

        // handle logic error on the backend
        if(!result.success) {
          dispatch({type: 'message', value: result.error!}) // update message
          dispatch({type: 'submit'}) // hide spinner
          setTimeout(() => {
            dispatch({type: 'disable'}) // enable submit button
            dispatch({type: 'default'}) // update message
          }, 3000)

          return
        }

        dispatch({type: 'submit'}) // hide spinner
        dispatch({type: 'show'}) // show glowing effect
        dispatch({type: 'message', value: 'Updated. Going to your bio'}) // update message
        // Redirect to bio
        setTimeout(() => {
          window.location.href = '/' + data.username
        }, 1500)
    }
  return (
    <button disabled={state.disabled} className='size-full absolute top-0 left-0' onClick={e => handleSubmit(e)}></button>
  )
}
