import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "react-modal";

import { useTransactions } from "../../hooks/usetransactions";

import {ReactComponent as CloseIcon} from '../../assets/close.svg'
import {ReactComponent as IncomeIcon} from '../../assets/income.svg'
import {ReactComponent as OutcomeIcon} from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from "./styles";
interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit')
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: ''
  })

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    console.log(formData.amount)

    await createTransaction({
      amount: Number(formData.amount),
      category: formData.category,
      title: formData.title,
      type
    })

    setType('deposit')
    setFormData({
      title: '',
      amount: '',
      category: ''
    })
    
    onRequestClose()
  }

  function handleChangeFormInput(event: ChangeEvent<HTMLInputElement>) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <CloseIcon />
      </button>
      
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          name='title'
          value={formData.title}
          onChange={handleChangeFormInput}
        />
        <input 
          placeholder="Valor"
          type="number"
          name='amount'
          value={formData.amount}
          onChange={handleChangeFormInput}
        />
        
        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          > 
            <IncomeIcon />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <OutcomeIcon />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          name='category'
          value={formData.category}
          onChange={handleChangeFormInput}
        />

        <button type="submit" onSubmit={handleCreateNewTransaction}>Cadastrar</button>
      </Container>
    </Modal>
  )
}