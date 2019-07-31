import React from 'react';

const AddEvent = props => {
  return <h1 onClick={() => props.addEvent(props.userId)}>hi</h1>;
};

export default AddEvent;
