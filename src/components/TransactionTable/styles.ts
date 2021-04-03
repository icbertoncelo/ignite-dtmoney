import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6.4rem;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    background: white
  }
  
  ::-webkit-scrollbar-thumb {
    background:var(--text-body);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${darken(0.1, "#969CB3")}
  }

  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      text-align: left;
      line-height: 2.4rem;
    }

    td {
      padding: 1.6rem 3.2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.4rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
