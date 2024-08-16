
import AuthenticationComponent from "../../components/authentication/Authentication"

const AuthenticationPage = () => {
  return (
    <div className="flex">
      <AuthenticationComponent purpose='signIn'/>
      <AuthenticationComponent purpose='signUp'/>
    </div>
  )
}

export default AuthenticationPage