import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    color: var(--shape);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    svg {
      color: yellow;
    }
  }

  div {
    display: flex;
    gap: 7px;
  }

  button {
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
`;
