import styled, { css } from 'styled-components';

interface Props {
  labelStyle: 'inside' | 'outside';
  isFocused: boolean;
  isFilled: boolean;
}

export const InputBlock = styled.div<Props>`
  ${({ labelStyle, isFocused, isFilled }) => css`
    position: relative;

    label {
      font-family: Poppins;
      font-weight: 400;
      color: #9c98a6;
      transition: top 0.2s;
      left: 2.4rem;
    }

    input {
      width: 100%;
      height: 5.6rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: var(--color-input-background);
      border: 1px solid var(--color-line-in-white);
      outline: 0;
      padding: 0 2.4rem;
      font: 1.6rem Archivo;
    }

    & + div {
      margin-top: 1.4rem;
    }

    &:focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
      border-radius: 0.8rem;
    }

    ${labelStyle === 'inside' &&
    css`
      label {
        position: absolute;
        top: 2.4rem;

        color: #c1bccc;
      }

      input {
        margin-top: 0;
        height: 7.2rem;
      }

      &:focus-within::after {
        height: calc(100% - 2.4rem);
        width: 2px;
        content: '';
        background: var(--color-primary-light);
        position: absolute;
        left: 0;
        top: 1.4rem;
      }
    `}

    ${(isFocused || isFilled) &&
    `label {
      top: 1rem;
      font-size: 1.2rem;
    }`}
  `}
`;
