import React, { useEffect, useState} from 'react';
import axios from 'axios';
import EventCard from './EventCard';

const EventList = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        const getEvent = () => {
            axios.get('https://bussiness-card-app.herokuapp.com/')
            .then(response => {
                console.log(response)
                setEvent(response.data)
            })
            .catch(error => {
                console.log('Server Error.', error)
            })
        }
        getEvent();
    }, [])

    return (
        <div>
            <h1>EventList:</h1>
            <EventCard />

            {/* <p>{event.map(e => (
                <EventCard key={e.id} e={e} /> ))}</p> */}
        </div>
    )
}

export default EventList;