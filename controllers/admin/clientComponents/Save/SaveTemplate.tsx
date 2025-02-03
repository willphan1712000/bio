
import { useReducer } from 'react'
import { ClipLoader } from 'react-spinners'
import { AdminSaveContext } from '../AdminContext'
import reducer from './Reducer'
import Save from './Save'

const SaveTemplate = () => {
    const [state, dispatch] = useReducer(reducer, {
        isSubmitting: false,
        isShow: false,
        disabled: false,
        default: 'Save',
        msg: 'Save'
      })

    return (
        <AdminSaveContext.Provider value={[state, dispatch]}>
            <div className='flex justify-center items-center sticky bottom-[1.5rem] z-[2] w-full'>
                <div className={`saveDefaultButtonStyle ${state.isShow ? 'saveDefaultButtonGlowingStyle': ''}`}>
                    <span className="flex items-center text-center"><p className='mx-[10px]'>{state.msg}</p> <ClipLoader size="20px" color='#000' loading={state.isSubmitting}/></span>
                    <Save />
                </div>
            </div>
        </AdminSaveContext.Provider>
    )
}

export default SaveTemplate
