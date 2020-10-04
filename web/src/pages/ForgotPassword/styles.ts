import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 76.8rem;
  flex: 1;
  height: 100%;
`;

export const LeftContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--color-background);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > a {
    position: absolute;
    top: 2.6rem;
    width: 35.2rem;
  }

  form {
    width: 35.2rem;

    h1 {
      font: 3.6rem Poppins;
      max-width: 26.6rem;
      font-weight: 600;
      line-height: 4.6rem;
      margin-bottom: 2.1rem;
      color: var(--color-text-title);
    }

    p {
      margin-bottom: 4rem;
    }
  }
`;

export const RightContent = styled.div`
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

export const SubmitButton = styled.button<{ isDisabled: boolean }>`
  border: 0;
  outline: 0;
  height: 5.6rem;
  border-radius: 0.8rem;
  color: var(--color-button-text);
  width: 100%;
  background: var(--color-secondary);
  transition: background 0.2s;
  margin-top: 4rem;

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
