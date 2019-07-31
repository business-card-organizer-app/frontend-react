import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';

const EventListShort = () => {
    const [event, setEvent] = useState([])
    // Unsure where state will be initialized. Map function is set up to receive 'userevents'
    useEffect(() => {
        const getEvent = () => {
            axios.get(`https://bussiness-card-app.herokuapp.com/api/user/:id/event/`)
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

    const userevents = {
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
                "user_id" : 2,
            },
            {
                "event_name": "Coding Brunch",
                "event_date": "21/9/2019",
                "event_venue" : "King St Cafe",
                "event_location": "Uptown",
                "user_id" : 2,
            },
            {
                "event_name": "Hackathon ",
                "event_date": "18/10/2019",
                "event_venue" : "Charleston Place",
                "event_location": "Hotel",
                "user_id" : 2,
            },
            {
                "event_name": "Holloween Meetup",
                "event_date": "31/10/2019",
                "event_venue" : "Recovery Room",
                "event_location": "CrossTown",
                "user_id" : 2,
            },
            {
                "event_name": "Open Source Conference",
                "event_date": "23/11/2019",
                "event_venue" : "Francis Marion Hotel",
                "event_location": "Downtown",
                "user_id" : 2,
            }
        ]
    }

    return (
        <div className='event-list'>
            <h1>EventList:</h1>
            {/* Currently set up as a dashboard component. Need to re-name and render the full component onClick of see al */}

            {userevents.data.map((e, i) => (
                i < 3 ?
                <EventCard 
                    key={e.id}
                    {...e} 
                    props={e} />
                : null ))}
                <Link to='/events'>See all</Link>
        </div>
    )
}

export default EventListShort;