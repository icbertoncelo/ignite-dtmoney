import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin-top: -10rem;
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

  div {
    background: var(--shape);
    padding: 2.4rem 3.2rem;
    border-radius: 0.4rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1.6rem;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.8rem;
    }

    &.highlight-background {
      background: var(--green);
      color: white;
    }
  }
`;
