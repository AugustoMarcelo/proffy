import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--color-primary);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg:first-of-type {
    position: absolute;
  }

  > h1 {
    font-size: 5.4rem;
    color: #fff;
    margin: 4rem 0 2.4rem;
  }

  > p {
    max-width: 47.2rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-align: center;
    color: var(--color-text-in-primary);
  }

  > a {
    border: 0;
    outline: 0;
    border-radius: 0.8rem;
    color: var(--color-button-text);
    padding: 1.5rem 4rem;
    background: var(--color-secondary);
    text-decoration: none;
    transition: background 0.2s;
    margin-top: 4rem;
    z-index: 1;

    &:hover {
      background: var(--color-secondary-dark);
    }
  }
`;
