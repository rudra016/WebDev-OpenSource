
"use client"
import { useEffect, useState } from 'react';



import Image from 'next/image';
import blue_logo from "./logoblue.png";
import userpg from "./userpg.png";

export default function Header() {
    const [name, Setname] = useState('');
    const [islogged, Setislogged] = useState(false);

    function Profile() {
        if (islogged) {
            return (
                <a href='\me' className='flex justify-center items-center'>
                    

                        <Image
                            src={userpg}
                            alt="Picture of the author"
                            className="w-11 h-11 bg-slate-700 rounded-l-full p-2 "
                        />
                        <div className='-m-1 pr-4 p-2 h-11 flex items-center text-gray-100 bg-slate-700 border-1 border-slate-400 rounded rounded-r-full'>{name}</div>
                    </a>
                
            );

        }
        else {
            return (
                <>
                    <a href="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                    <a href="/signup" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Create an account</a>

                </>
            )
        }


    }

    function Submissions() {
        if (islogged) {
            return (
                <li>
                            <a href="/submissions" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Submissions</a>
                        </li>
                
            );

        }
        else {
            return (
                <>
                    
                </>
            )
        }


    }
    useEffect(() => {
        fetch('http://localhost:5173/authorize', {
            method: 'GET',
            credentials: 'include' // This is important to send cookies
        }).then(response => {

            return response.json();
            

        }).then(
            data => {
                if (!data.name) {
                    console.log(data);
                    Setislogged(false);
                    return;
                    


                }
                console.log("cookie fetched");
                Setname(data.name);
                Setislogged(true);
            }
        ).catch(err => {
            
            console.log(err);
            Setislogged(false);
        })
    }, [])


    return (
        <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                    <Image
                        src={blue_logo}
                        alt="Picture of the author"
                        className="w-20 h-20"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Code<span className="text-blue-400">Abhi</span></span>
                </a>
                <div className="flex items-center lg:order-2">
                    <Profile />
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                        <li>
                            <a href="/problems" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Problems</a>
                        </li>
                        <Submissions/>
                        <li>
                            <a href="/contactme" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};