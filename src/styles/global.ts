import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 

    @media (max-width: 1080px) {
      font-size: 56.25%;
    }

    @media (max-width: 720px) {
      font-size: 50%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, style, textarea, button {
    font: 400 1.6rem "Poppins", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    position: relative;
    background: var(--background);
    padding: 4.8rem;
    border-radius: 0.4rem
  }

  .react-modal-close {
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
  }
`