import React from 'react'

const FormLayout = ({children}) => {
  return (
    <section className="relative body-font md:mt-12">
        <div className="container px-5 py-12 mx-auto">
            <div className="w-10/12 mx-auto">
                <div class="mb-6">
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize">
                        Business Sign Up
                    </h1>

                    <p class="mt-1 text-gray-500 tracking-wider">
                        Fill in the fields below to get started
                    </p>
                </div>
                {children}
            </div>
        </div>
    </section>
  )
}

export default FormLayout