import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { loginUser, registerUser } from "../../features/auth/authSlice"
import { mergeGuestCart } from "../../features/cart/cartItems"

const defaultFormField = {
  username: '',
  name: '',
  password: ''
}

const AuthenticationComponent = ({ purpose }) => {

  const [ formFields, setFormFields ] = useState(defaultFormField)
  const [ error, setError ] = useState(null)
  const [ submitting, setSubmitting ] = useState(false)

  const { username, name, password } = formFields;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isSignIn = purpose === 'signIn'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const action = isSignIn
      ? loginUser({ username, password })
      : registerUser({ username, name, password })

    const result = await dispatch(action)
    setSubmitting(false)

    if (result.meta.requestStatus === 'fulfilled') {
      await dispatch(mergeGuestCart())
      setFormFields(defaultFormField)
      navigate('/')
    } else {
      setError(result.payload)
    }
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
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  name="username"
                  type="text"
                  required
                  minLength={4}
                  autoComplete="username"
                  onChange={handleChange}
                  value={username}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {!isSignIn && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    onChange={handleChange}
                    value={name}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

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
                  autoComplete={isSignIn ? 'current-password' : 'new-password'}
                  onChange={handleChange}
                  value={password}
                  minLength={5}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600" role="alert">{error}</p>
            )}

            <div>
              <button
                type="submit"
                disabled={submitting}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
              >
                {submitting ? 'Please wait…' : isSignIn ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AuthenticationComponent

