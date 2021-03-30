import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import {ReactComponent as CloseIcon} from '../../assets/close.svg'
import {ReactComponent as IncomeIcon} from '../../assets/income.svg'
import {ReactComponent as OutcomeIcon} from '../../assets/outcome.svg'
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

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
      
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título"/>
        <input placeholder="Valor"type="number"/>
        
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

        <input placeholder="Categoria"/>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}