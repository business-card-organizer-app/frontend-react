import React from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 250px;
  border: 1px solid black;
  box-shadow: 5px 5px 5px darkgrey;
  display: flex;
  flex-flow: row nowrap;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 6.25%;
`;

const StyledTextContainer = styled.div`
  width: 66%;
  height: 250px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  h2 {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  h3 {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const StyledQRContainer = styled.div`
  width: 33%;
  height: 250px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

export default function SmallCardCreator(props) {
  const {
    first_name,
    last_name,
    occupation,
    phone,
    email,
    tagline,
    qr_code
  } = props;

  return (
    <StyledCardContainer>
      <StyledTextContainer>
        <h1 className='name'>
          {first_name} {last_name}
        </h1>
        <h2 className='occupation'>{occupation}</h2>
        <h3 className='phone'>{phone}</h3>
        <h3 className='email'>{email}</h3>
        <p className='tagline'>{tagline}</p>
      </StyledTextContainer>
      <StyledQRContainer>
        <img src={qr_code} alt='qr-code' />
      </StyledQRContainer>
    </StyledCardContainer>
  );
}
