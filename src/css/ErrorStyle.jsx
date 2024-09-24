import styled from "styled-components";

export const ErrorStyle = styled.section`
  * {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
  }

  .error-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .error-page h1 {
    font-size: 5rem;
  }

  .btn{
    color: #FFFFFFFF;
    padding: 0.7em 1.7em;
    font-size: 1rem;
    border-radius: 0.5em;
    background: #034C8C;
    cursor: pointer;
    border: 1px solid #0367A6;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  }
}
`;