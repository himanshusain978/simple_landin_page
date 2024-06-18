import React from 'react'

const Software = () => {
  return (
    <section>
        <h2 className=' text-4xl font-bold'>Start Your Carrer As a Software Engineere</h2>
        <div className='flex justify-center gap-5 mt-4'>
            <div>
                <h3 className=' text-2xl font-semibold'>Front-End</h3>
                <ul className="list-disc list-inside flex flex-col">
                    <li className="mb-2">Html</li>
                    <li className="mb-2">CSS</li>
                    <li className="mb-2">Java Script</li>
                    <li className="mb-2">React</li>
                </ul>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase</button>
            </div>
            <div>
                <h3 className=' text-2xl font-semibold'>Back-End</h3>
                <ul className="list-disc list-inside">
                    <li className="mb-2">NodeJs</li>
                    <li className="mb-2">ExpressJs</li>
                    <li className="mb-2">Java</li>
                    <li className="mb-2">Spring Boot</li>
                </ul>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
                 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase</button>
            </div>
            <div>
                <h3 className=' text-2xl font-semibold'>Cybersecurity</h3>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Network Security</li>
                    <li className="mb-2">Application Security</li>
                    <li className="mb-2">Data Security</li>
                    <li className="mb-2">Cryptography</li>
                </ul>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase</button>
            </div>
        </div>
    </section>
  )
}

export default Software