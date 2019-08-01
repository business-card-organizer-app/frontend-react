// [1] Upload file
// [2] Set file to state onChange
// [3] Send file to API onClick
// [4] Need to create an img on the UserCard to display the profille photo with the data passed down as props from the API request

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ProfilePhotoUpload = props => {
    const [state, setState] = useState({
        selectedFile: null
    })

    const [id, setID] = useState('');

    const fileSelectedHandler = event => {
        setState({selectedFile: event.target.files[0]})
        console.log('event.target.files[0]', event.target.files[0])
    }

    const fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', state.selectedFile, state.selectedFile.name)
        // Unsure of API endpoint
        Axios.patch(`https://bussiness-card-app.herokuapp.com/api/user/${id}/image`, fd)
        .then(res => {
            console.log(res)
        })
        console.log('state onClick: ', state)
    }

    return (
        <div>
            <h1>Hello world!</h1>
            <input type='file' name='file' onChange={fileSelectedHandler}/>
            <button onClick={fileUploadHandler}>Upload</button>
        </div>
    )
}

export default ProfilePhotoUpload;