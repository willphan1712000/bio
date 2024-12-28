
import { useReducer } from 'react'
import { ClipLoader } from 'react-spinners'
import { AdminSaveContext } from '../AdminContext'
import reducer from './Reducer'
import Save from './Save'

export default function SaveDefault() {
  const [state, dispatch] = useReducer(reducer, {
    isSubmitting: false,
    isShow: false,
    disabled: false,
    default: 'Save',
    msg: 'Save'
  })

  return (
    <div className='flex justify-center items-center sticky bottom-0 z-[2]'>
      <AdminSaveContext.Provider value={[state, dispatch]}>
        <div className={`saveDefaultButtonStyle ${state.isShow ? 'saveDefaultButtonGlowingStyle': ''}`}>
            <span className="flex items-center"><p className='mx-[10px]'>{state.msg}</p> <ClipLoader size="20px" color='#000' loading={state.isSubmitting}/></span>
            <Save />
        </div>
      </AdminSaveContext.Provider>
    </div>
  )
}

