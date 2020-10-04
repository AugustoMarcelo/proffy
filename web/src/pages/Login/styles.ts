import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 76.8rem 1fr;
  flex: 1;
  height: 100%;
`;

export const LeftContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);
  padding: 4.8rem 9.2rem;
  position: relative;

  display: flex;

  .background {
    width: 66.3rem;
    height: 58.4rem;
  }

  .logo-description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 29.4rem;
    height: 12.7rem;
  }
`;

export const RightContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--color-background);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 35.2rem;

    h1 {
      font: 3.6rem Poppins;
      font-weight: 600;
      line-height: 3.6rem;
      margin-bottom: 4rem;
      color: var(--color-text-title);
    }
  }
`;

export const SubmitButton = styled.button<{ isDisabled: boolean }>`
  border: 0;
  outline: 0;
  height: 5.6rem;
  border-radius: 0.8rem;
  color: var(--color-button-text);
  width: 100%;
  background: var(--color-secondary);
  transition: background 0.2s;

  ${({ isDisabled }) => !isDisabled && css`
    &:hover {
      background: var(--color-secondary-dark);
    }
  `}

  ${({ isDisabled }) => isDisabled && css`
    border: 0;
    outline: 0;
    height: 5.6rem;
    border-radius: 0.8rem;
    color: var(--color-text-complement);
    width: 100%;
    background: #DCDCE6;
    transition: background 0.2s;
    cursor: not-allowed;
  `}
`;

export const OptionsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding: 2.4rem 0 4rem;

  a {
    text-decoration: none;
    font: 1.4rem Poppins;
    line-height: 2.4rem;
    font-weight: 400;
    color: var(--color-text-complement);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  
  margin-top: 12.6rem;
  width: 35.2rem;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.4rem;

  > span {
    color: var(--color-text-complement);
    font-size: 1.2rem;
    line-height: 2rem;
    margin-right: 0.8rem;
  }
`;

export const CreateAccountBlock = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 1.6rem;
    color: var(--color-text-base);
    line-height: 2.6rem;
    font-weight: 400;
  }

  > a {
    font-weight: 600;
    color: var(--color-primary);
  }
`;