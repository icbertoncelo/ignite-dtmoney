import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 2.4rem;
    margin-bottom: 3.6rem;
  }

  input {
    width: 100%;
    padding:  2.4rem;
    height: 6.4rem;
    border: 1px solid #D7D7D7;
    border-radius: 0.4rem;
    background: #E7E9EE;

    font-weight: 400;
    font-size: 1.6rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1.6rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;
    background: var(--green);
    color: white;
    border-radius: 0.4rem;
    border: 0;
    font-size: 1.6rem;
    margin-top: 2.4rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
`
interface RadioBoxProps {
  isActive: boolean
  activeColor: 'red' | 'green'
}

const colors = {
  red: '#E62E4D',
  green: '#33CC95'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 6.4rem;
    border: 1px solid #D7D7D7;
    border-radius: 0.4rem;

    background: ${props => props.isActive 
      ? transparentize(0.9, colors[props.activeColor] )
      : 'transparent'
    };
  
    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#D7D7D7')}
    }

    svg {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1.6rem;
      font-size: 1.6rem;
      color: var(--text-title)
    }
`