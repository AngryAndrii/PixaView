import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  height: 70px;
  padding-top: 20px;
  background-color: var(--color-primary);
  border-radius: 10px;

  .input-section {
    width: 350px;
    height: 35px;
    margin: 0 auto;
  }

  .input-section .input,
  .button {
    height: 100%;
    border-radius: 10px;
    color: black;
    font-weight: 400;
    font-size: 15px;
  }

  .input {
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    outline: none;
    background-color: var(--color-light);
  }

  .input:focus-visible {
    border: 1px solid var(--red);
  }

  .button:is(:focus, :hover),
  .input:is(:focus, :hover) {
    outline: 2px solid var(--color-dark);
  }

  .button {
    border: none;
    background-color: var(--color-grey);
  }
`;

