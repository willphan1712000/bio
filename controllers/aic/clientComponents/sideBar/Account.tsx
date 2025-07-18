import React from 'react'
import Logo from '../../../client/clientComponents/Logo'
import { Button } from '@willphan1712000/w'

const Account = () => {
  return (
    <div className='w-full'>
      <div className='w-[60%] p-5 flex flex-col gap-5'>
        <Logo />
        <div>
          <Button content='Log out' onClick={() => console.log("Logout")}/>
        </div>
      </div>
    </div>
  )
}

export default Account
