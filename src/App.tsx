import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {createServer} from 'miragejs'
import { transactionsResponse } from "./mock/transactions";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', transactionsResponse)
  }
});

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false)
  
  function handleOpenNewTransactionModal() {
    setNewTransactionModalIsOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalIsOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal}  
      />

      <GlobalStyle />
    </
  >
  );
}