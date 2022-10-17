import styled from 'styled-components';

export const Button = styled.button`
  width: 90px;
  padding: 5px 0;
  font-size: 14px;
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid lightgray;
  background-color: #ffffff;
  /* color: black; */
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.1;
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
