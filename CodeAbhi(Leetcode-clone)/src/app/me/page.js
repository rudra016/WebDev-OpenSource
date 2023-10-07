"use client"
import { useEffect, useState } from 'react';


import Header from "../header"
export default function Page() {
    const [curruser, Setcurruser] = useState([])
    const date = new Date(curruser.createdAt);
    const mydate = date.toDateString();

    useEffect(() => {
        fetch("http://localhost:5173/me", {
            method: 'GET',
            credentials: 'include' // This is important to send cookies
        }).then(response =>
            response.json()
        ).then(data => {
            console.log(data);
            Setcurruser(data.curruser);
        }).catch(err => console.log(err))
    }, []);

    function handleLogout() {
        fetch(("http://localhost:5173/logout"), {
            method: 'POST',
            credentials: 'include'
        }).then(response => console.log("Logged out")).catch(err => console.log(err));
    }

    return (
        <div className='h-screen bg-gray-900'>
            <Header />
            <div className="flex flex-col bg-gray-900  w-screen">
                <div className=" w-screen border-b-8 border-gray-400 border-double">
                    <div className='flex object-center justify-center font-semibold p-4 text-5xl text-red-200 underline '  >My Profile</div>
                </div>

                <div className=" w-screen bg-gray-900 border-3 border-solid flex items-center justify-center">
                    <div className='text-xl py-11 pl-4'>

                        <div className="relative  overflow-x-auto shadow-md  sm:rounded-lg border-2 border-blue-300">
                            <table className="rounded-lg text-md text-left text-gray-300 dark:text-gray-300 font-ext">
                               
                                <tbody className='bg-gray-900  '>
                                    <tr className="border-b border-gray-200  dark:border-gray-700">
                                        <td scope="row" className="w-44 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Name
                                        </td>
                                        <td className="px-6 py-4 ">
                                            {curruser.name}
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <td scope="row" className=" w-44 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Email
                                        </td>
                                        <td className="px-6 py-4 w-96 ">
                                            {curruser.email}
                                        </td>
                                        
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700 max-w-sm">
                                        <td scope="row" className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Joined at
                                        </td>
                                        <td className="px-6 py-4">
                                            {mydate}
                                        </td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
                <div className=" pt-8 flex justify-center h-fill w-screen bg-gray-900 border-t-8 border-double border-gray-400">
                    <a href='/'>
                        <button onClick={handleLogout} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Logout</button>
                    </a>

                </div>
            </div>

        </div>


    );
}