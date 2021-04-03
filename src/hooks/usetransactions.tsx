import {createContext, ReactNode, useContext, useEffect, useState} from 'react'

import { api } from '../services/api'

interface TransactionProviderProps {
  children: ReactNode
}

interface Transaction {
  id: number
  title: string
  category: string
  type: string
  amount: number
  createdAt: string
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions').then(response => 
      setTransactions(response.data.transactions)
    )
  }, [])

  async function createTransaction(transaction: TransactionInput){
    const { data } = await api.post('/transactions', transaction)
    
    setTransactions([
      ...transactions,
      data.transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}