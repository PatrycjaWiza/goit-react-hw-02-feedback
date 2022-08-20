const { default: styled } = require('styled-components');

export const Button = styled.button`
   {
    margin-right: 10px;
    background: none;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 5px 15px;

    &:hover {
      background: #7676ff;
      transition: background 500ms;
      cursor: pointer;
    }
  }
`;
