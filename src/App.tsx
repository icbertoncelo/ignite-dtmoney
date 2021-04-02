import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";

import { initServer } from './server'
import { TransactionProvider } from "./contexts/transactions";

initServer()

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false)
  
  function handleOpenNewTransactionModal() {
    setNewTransactionModalIsOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalIsOpen(false)
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal}  
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}