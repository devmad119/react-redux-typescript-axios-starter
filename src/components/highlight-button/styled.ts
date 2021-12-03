import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(65.4deg, #4e89fe 18.74%, #6ac7fc 88.33%);
  border-radius: 5px;
  padding: 8px 16px;
  color: white;
  width: 100%;
  border: none;
  cursor: pointer;
  :hover {
    background: linear-gradient(65.4deg, #6ac7fc 15.74%, #4e89fe 78.33%);
  }
  :active {
    transform: scale(0.95);
  }
  :disabled {
    padding: 8px 8px;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
  }

  label {
    margin-left: 5px;
    cursor: pointer;
  }

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
