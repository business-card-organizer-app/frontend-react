import React, { useState } from 'react';

import CardList from './components/CardList';

function App() {

  const [cards, setCards] = useState([{"first_name": "Levi", "last_name": "Thomas", "occupation": "WebDev", "phone": "555-5555", "email": "levi@levithomas.dev", "tagline": "YEET", "qr_code": "#"},
{"first_name": "Levi", "last_name": "Thomas", "occupation": "WebDev", "phone": "555-5555", "email": "levi@levithomas.dev", "tagline": "YEET", "qr_code": "#"}])

  return (
    <div className="App">
      <CardList cardcollection={cards} />
    </div>
  );
}

export default App;
