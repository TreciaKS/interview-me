import React from 'react'

const EmailSubmission = () => {
  return (
    <section classMame="h-s mx-auto grid max-w-lg place-content-center px-4 py-12">
        <div classMame="mx-auto h-10 w-10 bg-red-100 sm:w-1/4"></div>
        <h2 classMame="mt-2 text-center text-3xl font-semibold text-gray-800">Check your email</h2>

        <p classMame="text-md mt-1 text-center text-gray-500">
            We&apos;ve sent a verification like to <span classMame="font-medium text-gray-700">user@email.com</span>
        </p>
    </section>

  )
}

export default EmailSubmission