import React, { Component, useState } from 'react';
import logo from './images/sslogo.png';
import { ethers } from "ethers";
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(aws_exports);

/**
 * class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
*/

function App() {

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
  
    // Setting a balance
    getbalance(account);
  };

  return (
    <div>
      <AmplifySignOut />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Card className="text-center">
        <Card.Header>
          <strong>Address: </strong>
          {data.address}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Balance: </strong>
            {data.Balance}
          </Card.Text>
          <Button onClick={btnhandler} variant="primary">
            Connect to wallet
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}


export default withAuthenticator(App);
