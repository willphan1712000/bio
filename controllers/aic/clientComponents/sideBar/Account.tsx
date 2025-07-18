import useCollapseContext from './context/collapse'
import Logo from '../../../client/clientComponents/Logo'

const Account = () => {
  const { isCollapse } = useCollapseContext()

  return (
    <div className='w-full h-[80px]'>
      <div className='w-[60%] p-5 flex flex-col gap-5'>
        { !isCollapse && <Logo /> }
      </div>
    </div>
  )
}

export default Account
