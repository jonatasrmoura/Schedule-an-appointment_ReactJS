import styled from'styled-components';

export const Container = styled.form`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;

    h2 {
      color: var(--text-title);
      font-size: 1.5rem;
    }

    button[type="button"] {
      font-size: 1rem;
      color: #FFF;
      background: var(--blue-light);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;

      transition: filter .3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--input-border);
    background: var(--input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color:  #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
