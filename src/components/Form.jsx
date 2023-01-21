import React from 'react'

const Form = () => {
  return (
    <form className="-m-2 flex flex-wrap">
        <div className="w-1/2 p-2">
            <div className="relative">
            <label for="firstName" className="text-md pb-2 font-medium capitalize leading-10 text-gray-900">first name</label>
            <input type="text" id="firstname" name="firstname" placeholder="Insert First Name" className="w-full rounded-lg border border-gray-200 py-1 px-3 text-base leading-8 text-gray-500 placeholder-gray-300 outline-none" />
            </div>
        </div>

        <div className="w-1/2 p-2">
            <div className="relative">
            <label for="lastName" className="text-md pb-2 font-medium capitalize leading-10 text-gray-900">last name</label>
            <input type="text" id="lastname" name="lastname" placeholder="Insert Last Name" className="w-full rounded-lg border border-gray-200 py-1 px-3 text-base leading-8 text-gray-500 placeholder-gray-300 outline-none" />
            </div>
        </div>

        <div className="w-full p-2">
            <div className="relative">
            <label for="Business Name" className="text-md pb-2 font-medium capitalize leading-10 text-gray-900">business name</label>
            <input type="text" id="business-name" name="business-name" placeholder="Insert Business Name" className="w-full rounded-lg border border-gray-200 py-1 px-3 text-base leading-8 text-gray-500 placeholder-gray-300 outline-none" />
            </div>
        </div>

        <div className="w-1/2 p-2">
            <div className="relative">
            <label for="email" className="text-md pb-2 font-medium capitalize leading-10 text-gray-900">email adresss</label>
            <input type="email" id="email" name="email" placeholder="myemail@xyz.com" className="w-full rounded-lg border border-gray-200 py-1 px-3 text-base leading-8 text-gray-500 placeholder-gray-300 outline-none" />
            </div>
        </div>

        <div className="w-1/2 p-2">
            <div className="relative">
            <label for="number" className="text-md pb-2 font-medium capitalize leading-10 text-gray-900">Contact Number</label>
            <div className="flex">
            <select className="relative mr-2 outline-none" name="za-code" id="country_code">
                <option value="+27">+27</option>
            </select>
            <input type="tel" id="number" name="number" placeholder="myemail@xyz.com" className="w-full rounded-lg border border-gray-200 py-1 px-3 text-base leading-8 text-gray-500 placeholder-gray-300 outline-none" />
            </div>
            </div>
        </div>

        <div className="w-1/2 p-2">
            <div className="relative">
            <label for="Password" className="text-md pb-2 font-medium capitalize leading-10 text-gray-900">password</label>
            <input type="password" id="password" name="password" placeholder="*********" className="w-full rounded-lg border border-gray-200 py-1 px-3 text-base leading-8 text-gray-500 placeholder-gray-300 outline-none" />
            </div>
        </div>

        <div className="w-1/2 p-2">
            <div className="relative">
            <label for="Password" className="text-md pb-2 font-medium capitalize leading-10 text-gray-900">confirm password</label>
            <input type="password" id="password" name="password" placeholder="*********" className="w-full rounded-lg border border-gray-200 py-1 px-3 text-base leading-8 text-gray-500 placeholder-gray-300 outline-none" />
            </div>
        </div>

        <div className="w-full p-2">
            <label className="flex items-center">
            <input type="checkbox" className="h-8 w-8 text-gray-100" />
            <span className="text-md ml-2 block cursor-pointer text-gray-600">I consent to receiving marketing material</span>
            </label>
        </div>

        <div className="mt-4 w-full p-2">
            <div className="relative">
            <input type="submit" id="submit" name="submit" value="Sign Up" className="w-full rounded-lg bg-blue-600 py-1 px-3 text-base leading-8 text-gray-50 outline-none" />
            </div>
        </div>
    </form>
  )
}

export default Form