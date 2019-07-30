import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LargeCard from './LargeCard'

const LargeCardList = (props) => {
    const [card, setCard] = useState([])
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`https://bussiness-card-app.herokuapp.com/api/user/${user.id}/profile`)
            .then(res => {
                console.log(res)
                setCard(res.data)
            })
    }, [])
    return (
        <div>{card.map(e => <LargeCard key={e.id} card={e} />)}</div>
    )
}

export default LargeCardList;