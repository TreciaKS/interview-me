import React from 'react'
import Image from '../Images/business-woman.png' 

const Container = ({children}) => {
  return (
    <>
        <main className="bg-white">
            <div className="flex justify-center min-h-screen">
                <header className="w-full px-12 py-8 bg-white">
                    {children}
                </header>

            {/* place images */}
            <div class="bg-cover lg:block lg:w-1/2">
            </div>
              <img src={Image} alt="BUSINESS WOMAN HOLDING A PHONE" />
            </div>
        </main>
    </>
  )
}

export default Container