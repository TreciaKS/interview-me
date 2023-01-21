import React from 'react'
import Image from '../Images/business-woman.png' 
import Form from './Form'
import FormLayout from './FormLayout'
import Logo from './Logo'

const Container = () => {
  return (
    <>
        <main className="bg-white">
            <div className="flex justify-center min-h-screen">
                <header className="w-full px-12 py-8 bg-white">
                <Logo />
                  <FormLayout>
                    <Form />
                  </FormLayout>
                </header>

            {/* place images */}
            <div className="bg-cover lg:block lg:w-1/2">
              <img src={Image} className="h-screen w-full" alt="BUSINESS WOMAN HOLDING A PHONE" />
            </div>
              
            </div>
        </main>
    </>
  )
}

export default Container