import React, { useEffect } from 'react';
import './App.css';

function App()
{

  const testApi = async () =>
  {
    await fetch("https://my-json-server.typicode.com/Ajazsakib/react-eCommerce", {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        products: "Images"
      })
    })
  }

  useEffect(() =>
  {
    testApi()
  }, [])

  return (
    <div className="App">
      <h1>React eCommerce App</h1>
    </div>
  );
}

export default App;
