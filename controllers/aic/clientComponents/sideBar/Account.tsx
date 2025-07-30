import useCollapseContext from './context/collapse'
import Logo from '../../../client/clientComponents/Logo'

const Account = () => {
  const { isCollapse } = useCollapseContext()
  const logoClasses = `flex w-[60%] p-5 flex-col gap-5`

  return (
    <div className='w-full h-[80px]'>
      <div className={logoClasses}>
        { !isCollapse && <Logo /> }
      </div>
    </div>
  )
}

export default Account
