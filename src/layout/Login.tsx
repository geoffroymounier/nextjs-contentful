import React from 'react';
// import { useRouter } from 'next/router';
// import { Magic } from 'magic-sdk';

const Login = () => {
  // const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()
  
    // const { elements } = event.target

    // const authRequest = await fetch('/api/login', {
    //   method: 'POST',
    //   body : JSON.stringify({
    //     email: elements.email.value
    //   })
    // })
    // if (authRequest.ok) {
    //   await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY)
    //   .auth
    //   .loginWithMagicLink({ email: elements.email.value })
    //   // We successfully logged in, our API
    //   // set authorization cookies and now we
    //   // can redirect to the dashboard!
    //   router.push('/')
    // } else { /* handle errors */ }
  }

  return (
    <div className="flex items-center justify-center flex-grow bg-gray-500">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">

            <div
              className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Login
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                autoFocus
                placeholder="Email"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login;