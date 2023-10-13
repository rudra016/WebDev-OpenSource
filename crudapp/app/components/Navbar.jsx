import React from "react";
import Link from "next/link";
import logo from "./handshake-angle-solid.svg"
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <nav>
        <Image src={logo} width={70} quality={100} alt="Logo"></Image>
        <h1>Helpdesk</h1>
        <Link href="/">Go to Dashboard</Link>
        <br></br>
        <Link href="/tickets">Go to Tickets</Link>
      </nav>
    </div>
  );
}
