import React, { Suspense } from "react";
import Ticketlist from "../components/Ticketlist";
import Loading from "../loading";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <nav>
        <div className="flex justify-between items-center">
          <h2>Tickets  -</h2>
          <br></br>
          <p>Currently Open Tickets</p> 
          <h2><button><Link href="./tickets/create">Create a new ticket</Link></button></h2>
        </div>

       
      </nav>

      <Suspense fallback={<Loading/>}>
        <Ticketlist/>
      </Suspense>  
    </main>
  );
}
