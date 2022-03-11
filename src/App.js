import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import React from 'react';


function App() {
  
  
  const [product,setProduct] = React.useState({
    price:100,
  });
  
  
  
  const makePayment = (token) => {
    const body  = {
      token,
      product
    }
    const headers = {
      "Content-Type":"application/json"
    }
    return fetch(`http://localhost:3000/payment`,{
      method:"POST",
      headers,
      body:JSON.stringify(body) 
    })
    .then(response =>{
      console.log(response);
      const {status} = response;
      console.log(status);
    })
    .catch(err=>console.log(err));
    
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <StripeCheckout stripeKey='pk_test_51Kc2FWCxOg6ThvoBrQoRkcJuWyQOdIca8UkGo5jjfrU2zqYGyU2fTCRx45rZaTFbKtkZhPBQBGW0ECXjVB2EFNod00vGbUuUis'
       token={makePayment}
      name="By React"
      amount={product.price} />
      </header>
    </div>
  );
}

export default App;
