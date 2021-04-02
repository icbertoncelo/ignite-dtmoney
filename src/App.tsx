import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {createServer, Model} from 'miragejs'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento web',
          type: 'deposit',
          category: 'Dev',
          amount: 4000,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Conta de luz',
          type: 'withdraw',
          category: 'Contas',
          amount: 400,
          createdAt: new Date()
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    
    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })
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