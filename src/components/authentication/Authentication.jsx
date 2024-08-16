import { useState } from "react"

const defaultFormField = {
  email: '',
  password: ''
}

const AuthenticationComponent = ({ purpose }) => {

  const [ formFields, setFormFields ] = useState(defaultFormField)

  const { email, password } = formFields;

  const handleSubmit = (e) => {
    e.preventDefault()

    if (purpose === 'signIn') {
      console.log({purpose, should: 'SignIn'})
    } else {
      console.log({purpose, should: 'SignUp'})
    }
    console.log({formFields})
    setFormFields(defaultFormField)
  }

  const handleChange = (e) =>{
    const { name, value } = e.target 
    setFormFields({...formFields, [name]: value})
  }

  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {
              purpose === 'signIn' ? 'Sign in to your account' : 'Sign up with an email and password'
            }
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={handleChange}
                  value={email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={password}
                  minLength={5}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {purpose === 'signIn' ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AuthenticationComponent

