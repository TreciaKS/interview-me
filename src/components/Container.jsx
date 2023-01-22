import React from 'react'
import AppLayout from './AppLayout'
import FormLayout from './FormLayout'
import { useNavigate } from 'react-router-dom'

const Container = () => {
  const navigate = useNavigate()
  
  function handleClick(e) {
    navigate('/EmailSubmission')
  }
  
  return (
    <AppLayout>
      <FormLayout>
        <form className="flex flex-wrap -m-2" onSubmit={handleClick}>
          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                for="firstName"
                className="pb-2 font-medium leading-10 text-gray-900 capitalize text-md"
              >
                first name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Insert First Name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-500 placeholder-gray-300 border border-gray-200 rounded-lg outline-none"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                for="lastName"
                className="pb-2 font-medium leading-10 text-gray-900 capitalize text-md"
              >
                last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Insert Last Name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-500 placeholder-gray-300 border border-gray-200 rounded-lg outline-none"
              />
            </div>
          </div>

          <div className="w-full p-2">
            <div className="relative">
              <label
                for="Business Name"
                className="pb-2 font-medium leading-10 text-gray-900 capitalize text-md"
              >
                business name
              </label>
              <input
                type="text"
                id="business-name"
                name="business-name"
                placeholder="Insert Business Name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-500 placeholder-gray-300 border border-gray-200 rounded-lg outline-none"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                for="email"
                className="pb-2 font-medium leading-10 text-gray-900 capitalize text-md"
              >
                email adresss
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="myemail@xyz.com"
                className="w-full px-3 py-1 text-base leading-8 text-gray-500 placeholder-gray-300 border border-gray-200 rounded-lg outline-none"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                for="number"
                className="pb-2 font-medium leading-10 text-gray-900 capitalize text-md"
              >
                Contact Number
              </label>
              <div className="flex">
                <select
                  className="relative mr-2 outline-none"
                  name="za-code"
                  id="country_code"
                >
                  <option value="+27">+27</option>
                </select>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="myemail@xyz.com"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-500 placeholder-gray-300 border border-gray-200 rounded-lg outline-none"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                for="Password"
                className="pb-2 font-medium leading-10 text-gray-900 capitalize text-md"
              >
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*********"
                className="w-full px-3 py-1 text-base leading-8 text-gray-500 placeholder-gray-300 border border-gray-200 rounded-lg outline-none"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                for="Password"
                className="pb-2 font-medium leading-10 text-gray-900 capitalize text-md"
              >
                confirm password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*********"
                className="w-full px-3 py-1 text-base leading-8 text-gray-500 placeholder-gray-300 border border-gray-200 rounded-lg outline-none"
                required
              />
            </div>
          </div>

          <div className="w-full p-2">
            <label className="flex items-center">
              <input type="checkbox" className="w-8 h-8 text-gray-100" />
              <span className="block ml-2 text-gray-600 cursor-pointer text-md">
                I consent to receiving marketing material
              </span>
            </label>
          </div>

          <div className="w-full p-2 mt-4">
            <div className="relative">
              <input
                type="submit"
                id="submit"
                name="submit"
                value="Sign Up"
                className="w-full px-3 py-1 text-base leading-8 bg-blue-600 rounded-lg outline-none text-gray-50"
              />
            </div>
          </div>
        </form>
      </FormLayout>
    </AppLayout>
  );
}

export default Container