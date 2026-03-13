import Link from "next/link";
async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets" , {
    next:
    {
        revalidate:0 //no caching 
    }
  });
  return res.json();
}
export default async function Ticketlist() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5" >
        <Link href={`/tickets/${ticket.id}`}>
          <h3>{ticket.title}</h3>
          <p>{ticket.title.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (<p> There are no open tickets</p>)}
    </>
  );
}
