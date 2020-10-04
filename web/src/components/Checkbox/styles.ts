import styled from 'styled-components';

type CheckboxProps = {
  checked: boolean;
}

export const InputBlock = styled.button.attrs({
  type: 'button'
})`
  display: flex;
  align-items: center;

  border: none;
  background: transparent;
  outline: 0;
  
  input {
    display: none;
  }

  label {
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-left: 1.6rem;
    color: var(--color-text-complement);
  }
`;

export const Box = styled.div<CheckboxProps>`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 8px;
  transition: background 0.2s;
  border: ${({ checked }) => checked ? '2px solid var(--color-secondary);' : '1px solid var(--color-line-in-white);'};
  background: ${({ checked }) => checked ? 'var(--color-secondary);' : 'var(--color-box-footer);'};

  display: flex;
  align-items: center;
  justify-content: center;
`;