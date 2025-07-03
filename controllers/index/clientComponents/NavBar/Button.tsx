import Signin from '../Signin'
import Signup from '../Signup'

const Button = () => {
  return (
    <>
        <Signin title="Sign In" size="3" color="crimson" variant='outline'/>
        <Signup title="Sign up" size="3" color="indigo" variant='outline'/>
    </>
  )
}

export default Button
