import React, { useState } from 'react';
import Axios from 'axios';

const ProfilePhotoUpload = props => {
    const [state, setState] = useState({
        selectedFile: null
    })

    const fileSelectedHandler = event => {
        console.log('event.target.files[0]', event.target.files[0])
        setState({selectedFile: event.target.files[0]})
        console.log('state', state)
    }

    const fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', state.selectedFile, state.selectedFile.name)
        // Unsure of API endpoint
        Axios.post('https://bussiness-card-app.herokuapp.com/api/', fd)
        .then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            <h1>Hello world!</h1>
            <input type='file' onChange={fileSelectedHandler}/>
            <button onClick={fileUploadHandler}>Upload</button>
        </div>
    )
}

export default ProfilePhotoUpload;