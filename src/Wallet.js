import { useEffect, useState } from "react";
import { 
    connectWallet, 
    getCurrentWalletConnected
  }
from "./utils/walletInteract.js";


const ConectWall = (props) => {


  const connectWallt = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };


  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(async () => {
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);

    addWalletListener(); 
  }, []);

{}

export default connectWall;