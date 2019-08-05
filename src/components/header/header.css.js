import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #0b0b0c;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;
