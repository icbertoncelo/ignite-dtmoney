import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import {ReactComponent as CloseIcon} from '../../assets/close.svg'
import {ReactComponent as IncomeIcon} from '../../assets/income.svg'
import {ReactComponent as OutcomeIcon} from '../../assets/outcome.svg'

import { api } from '../../services/api'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')
  const [formData, setFormData] = useState({
    title: '',
    value: 0,
    category: ''
  })

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      ...formData, 
      type
    }

    api.post('/transactions', data)
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
          name='value'
          value={formData.value}
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