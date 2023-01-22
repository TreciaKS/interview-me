import React from 'react'
import Form from './Form'

const FormLayout = () => {
  return (
    <section className="relative body-font lg:mt-24 md:mt-12">
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
                <Form />
            </div>
        </div>
    </section>
  )
}

export default FormLayout