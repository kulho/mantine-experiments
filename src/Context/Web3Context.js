import { Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconExclamationMark, IconX } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min.js";
import { shortenAddress } from "../utils/shortenAddress";

const { ethereum } = window;

export const Web3Context = React.createContext();

export const Web3Provider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [web3, setWeb3] = useState([]);

  const checkIfWalletConnected = async () => {
    try {
      if (!ethereum)
        return showNotification({
          icon: <IconX size={18} />,
          color: "red",
          title: "Please install Metamask",
          message: (
            <Text
              variant="link"
              component="a"
              href="https://metamask.io/download/"
            >
              click here to install
            </Text>
          ),
          autoClose: false,
        });

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        showNotification({
          icon: <IconCheck size={18} />,
          color: "Green",
          title: "Succesfully connected with account:",
          message: shortenAddress(accounts[0]),
          autoClose: 5000,
        });
      } else {
        return showNotification({
          icon: <IconExclamationMark size={18} />,
          color: "orange",
          title: "Please connect using Metamask",
          autoClose: 8000,
        });
      }

      console.log(accounts);
    } catch (error) {
      console.log(error);
      return showNotification({
        icon: <IconX size={18} />,
        color: "red",
        title: "Error connecting",
        message: error.message,
      });
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum)
        return showNotification({
          icon: <IconX size={18} />,
          color: "red",
          title: "Please install Metamask",
          message: (
            <Text
              variant="link"
              component="a"
              href="https://metamask.io/download/"
            >
              click here to install
            </Text>
          ),
          autoClose: false,
        });

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setConnectedAccount(accounts[0]);
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    } catch (error) {
      console.log(error);
      return showNotification({
        icon: <IconX size={18} />,
        color: "red",
        title: "Error connecting",
        message: error.message,
      });
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <Web3Context.Provider value={{ connectWallet, web3, connectedAccount }}>
      {children}
    </Web3Context.Provider>
  );
};
