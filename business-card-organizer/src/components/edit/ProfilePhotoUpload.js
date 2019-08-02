// [1] Upload file
// [2] Set file to state onChange
// [3] Send file to API onClick
// [4] Need to create an img on the UserCard to display the profille photo with the data passed down as props from the API request

import React, { useState } from 'react';
import styled from 'styled-components';

const ProfilePhotoUpload = props => {
  const [state, setState] = useState({
    selectedFile: null
  });

  const fileSelectedHandler = event => {
    setState({ selectedFile: event.target.files[0] });
    console.log('event.target.files[0]', event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', state.selectedFile, state.selectedFile.name);
    props.editImage(props.id, fd);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <input type='file' name='file' onChange={fileSelectedHandler} />
      <button style={{ margin: 10 }} onClick={fileUploadHandler}>
        Upload
      </button>
    </div>
  );
};

export default ProfilePhotoUpload;
