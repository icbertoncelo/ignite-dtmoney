import { useContext, useMemo } from "react";
import { TransactionsContext } from "../../contexts/transactions";

import { ReactComponent as IncomeIcon} from '../../assets/income.svg'
import  { ReactComponent as OutcomeIcon} from '../../assets/outcome.svg'
import  { ReactComponent as TotalIcon} from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() { 
  const { transactions } = useContext(TransactionsContext)

  const summary = useMemo(() => {
    return transactions.reduce((accumulator, transaction) => {
      if(transaction.type === 'deposit') {
        accumulator.deposits += transaction.amount
        accumulator.total += transaction.amount
      } else {
        accumulator.widhdraws += transaction.amount
        accumulator.total -= transaction.amount
      }

      return accumulator
    }, {
      deposits: 0,
      widhdraws: 0,
      total: 0,
    })
  }, [transactions])

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
         <IncomeIcon />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <OutcomeIcon />
        </header>
        <strong>- {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.widhdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <TotalIcon />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}