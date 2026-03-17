import { useState } from "react";
import axios from "axios";

function CreateEvent() {

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [date,setDate] = useState("");
const [venue,setVenue] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

await axios.post("http://localhost:5000/create-event",{
title,
description,
date,
venue
});

alert("Event Created");
window.location.reload();
};

return (

<div>

<h2>Create Event</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<br/>

<input
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
/>

<br/>

<input
type="date"
onChange={(e)=>setDate(e.target.value)}
/>

<br/>

<input
placeholder="Venue"
onChange={(e)=>setVenue(e.target.value)}
/>

<br/>

<button type="submit">Create Event</button>

</form>

</div>

);

}

export default CreateEvent;