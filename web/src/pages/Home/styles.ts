import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--color-primary);

  display: grid;
  grid-template-rows: 50.3rem auto;
`;

export const Content = styled.div`
  height: 53.3rem;
  width: 90vw;
  max-width: 1440rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  margin: 2.4rem 0 6.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin-right: 1.6rem;
  }

  span {
    color: var(--color-text-in-primary);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 3rem;
  }
`;

export const LogoutButton = styled.button`
  width: 4rem;
  height: 4rem;
  background: var(--color-primary-dark);
  border: 0;
  border-radius: 0.8rem;
  outline: 0;
  transition: background 0.2s;
  
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-primary-darker);
  }
`;

export const Backgrounds = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 45%;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  p {
    color: var(--color-text-in-primary);
    font-size: 2.4rem;
    max-width: 29.8rem;
  }
`;

export const Footer = styled.div`
  background: #e5e5e5;
  
  > div {
    width: 90vw;
    max-width: 144rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.2rem 0;

  > span {
    width: 18.4rem;
    margin-right: 5.3rem;
    text-align: right;

    img {
      margin-left: 0.8rem;
    }
  }

  a {
    width: 25rem;
    height: 8.4rem;
    padding: 1rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
    background: var(--color-secondary);

    &:hover {
      background: var(--color-secondary-dark);
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }

    &:first-of-type {
      margin-right: 1.6rem;
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }
  }
`;
