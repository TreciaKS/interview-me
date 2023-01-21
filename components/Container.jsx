import React from 'react'

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

            </div>
        </main>
    </>
  )
}

export default Container