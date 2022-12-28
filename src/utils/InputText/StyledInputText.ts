import {color, text_s} from "../styles";
import styled from 'styled-components';
import {spacing} from "../props";

export const TextArea = styled.input<any>`
  &:focus-visible {
    outline: 2px solid #8CA0FF;
  }

  padding: 10px;
  border: 1px solid #DDDEE1;
  background: #F9F9F9;
  border-radius: 4px;
  &:disabled {
    background: #f0f1f2;
    border: 1px solid #dddee1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .error-validation {
    ${text_s}
    margin: 0;
    padding-left: 5px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    color: #B00020;
    & svg {
       margin-right: 6px;
    }
  }
  
  .active{
    outline: 2px solid #2DB84B;
  }
  
  .error{
    color: #B00020;
    background: #FEEDF3;
  }
`;
