import React, { useEffect, useState} from 'react';
import axios from 'axios';

import EventCard from './EventCard';

const EventList = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        const getEvent = () => {
            axios.get('https://bussiness-card-app.herokuapp.com/api/user/:id/event/')
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

    const temp = {
        "status": 201,
        "data": [
            {
                "event_name": "Lambda Build Week",
                "event_date": "22/8/2019",
                "event_venue" : "Zoom",
                "event_location": "Online",
                "user_id" : 2,
            },
            {
                "event_name": "Tech Meetup",
                "event_date": "10/9/2019",
                "event_venue" : "Digital Cafe",
                "event_location": "Downtown",
                "user_id" : 3,
            }
        ]
    }

    return (
        <div>
            <h1>Event List:</h1>

            {temp.data.map(e => (
                <EventCard key={e.id} {...e} props={e} /> ))}
        </div>
    )
}

export default EventList;