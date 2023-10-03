"use client"
import { useEffect, useState } from "react";
import Image from 'next/image';

import Header from "../header";
import yes from "../yes.png";
import no from "../no.png";


export default function Page() {
    const [mysubmissions, Setmysubmissions] = useState([]);
    const [page,setpage]= useState(1);


    function statusupdate(i) {
        if (mysubmissions[i].status == "ac") {
            return (
                <Image src={yes} className="w-5 h-5"></Image>

            )
        }
        else {

            return (
                <Image src={no} className="w-5 h-5"></Image>

            )
        }

    }

    useEffect(() => {
        fetch("http://localhost:5173/submissions", {
            method: 'GET',
            credentials: 'include' // This is important to send cookies
        }).then(response => response.json()).then(data => {

            Setmysubmissions(data);
        })


    }, []);

    function RowGenerator(page) {
        const mysize = mysubmissions.length;
        console.log(mysize);
        let rows = [];
        let start = 10 * (page - 1);
        let end = Math.min(start + 10, mysize);
        for (var i = start; i < end; i++) {
            const date = new Date(mysubmissions[i].createdAt);
            const mydate = date.toUTCString();
            rows.push(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        <div className="flex items-center">

                            {statusupdate(i)}

                        </div>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {mysubmissions[i].no}
                    </th>
                    <td className="px-6 py-4">
                        {mysubmissions[i].name}
                    </td>
                    <td className="px-6 py-4">
                        {mydate}
                    </td>

                    <td className="px-6 py-4">
                        <a href={`/submission/${mysubmissions[i]._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                    </td>
                </tr>
            )
        }

        return rows;
    }

    return (
        <div className="h-screen bg-gray-900 ">
            <Header />


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5 bg-gray-900 border border-gray-500">
                <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    Status
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Submission Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {RowGenerator(1)}

                    </tbody>
                </table>
                <nav className="flex items-center  justify-end py-2 bg-gray-900 " aria-label="Table navigation">
                <ul className="inline-flex -space-x-px text-sm h-8">
                            <li>
                                <button onClick={() => {setpage(Math.max(1,page-1))}} className="page-button rounded-l-lg">Previous</button>
                            </li>
                            <li>
                                <button onClick={() => {setpage(1)}} className="page-button rounded-lg">1</button>
                            </li>
                            <li>
                                <button onClick={() => {setpage(2)}} className="page-button rounded-lg">2</button>
                            </li>
                            <li>
                                <button onClick={() => {setpage(3)}} className="page-button rounded-lg">3</button>
                            </li>
                            <li>
                                <button onClick={() => {setpage(Math.min(3,page+1))}} className="page-button rounded-r-lg ">Next</button>
                            </li>
                           
                        </ul>
                </nav>
            </div>

        </div>


    )
};