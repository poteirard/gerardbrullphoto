import styled from 'styled-components';

export const FormField = styled.div`
  padding: 10px 0;
`;

export const Label = styled.label``;

export const InputText = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 30px;
  flex: 0 0 100%;
`;

export const InputSubmit = styled.input`
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  color: #757575;
  border: 1px solid #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 4rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const TextArea = styled.textarea`
  border: 0;
  width: 100%;
  height: 100px;
  border-radius: 2px;
`;
