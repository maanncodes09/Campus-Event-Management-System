import { useEffect,useState } from "react";
import axios from "axios";

function EventsList(){

const [events,setEvents] = useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/events")
.then(res=>setEvents(res.data));

},[]);

return(

<div>

<h2>All Events</h2>

{events.map((event)=>(
<div key={event._id}>

<h3>{event.title}</h3>
<p>{event.description}</p>
<p>{event.date}</p>
<p>{event.venue}</p>

</div>
))}

</div>

);

}

export default EventsList;