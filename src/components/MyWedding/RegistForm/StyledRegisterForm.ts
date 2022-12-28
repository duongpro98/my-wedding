import styled from "styled-components";
import {heading_xxl, text_l, text_s} from "../../../utils/styles";
import {mq} from "../../../utils/styles";

export const FormContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  ${heading_xxl}
  color: white;
  margin-top: 50px;
  font-family: 'Dancing Script', cursive;
`

export const Footer = styled.div`
  ${heading_xxl}
  color: white;
  margin: 20px 0px;
  font-family: 'Dancing Script', cursive;
`

export const Description = styled.div`
  ${text_l}
  font-family: 'Dancing Script', cursive;
  margin-top: 20px;
  color: white;
`

export const Notice = styled.div<any>`
  ${text_l}
  font-family: 'Dancing Script', cursive;
  margin-top: 20px;
  color: ${props => props.isSuccess ? '#ef629f': '#eb3349'};
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 30px;
  
  .error-note {
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
`

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq.lessThan('sm')}{
    align-items: center;
  }
`

export const TextArea = styled.textarea`
  font-size: 20px;
  min-height: 220px;
  width: 80%;
  &:focus-visible {
    outline: 2px solid #8CA0FF;
  }
  padding: 10px;
  border: 1px solid #DDDEE1;
  background: #F9F9F9;
  border: 10px solid transparent;
  border-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXWrR06-KNf6LAfRrkEEKdtuwDbI2mZQodGzBfhIYyePSpQzMKCWdPssXZqPooRcbWhU&usqp=CAU") 36 round;
  &:disabled {
    background: #f0f1f2;
    border: 1px solid #dddee1;
  }
  ${mq.lessThan('xl')}{
    width: 100%;
  }
  ${mq.lessThan('sm')}{
    margin-top: 30px;
    width: 70%;
  }
`

export const TextContainer = styled.div`
  margin-top: 10px;
`

export const Text = styled.div`
  ${text_l}
  margin: 0px 0px 10px 0px;
  font-family: 'Dancing Script', cursive;
  color: white;
  text-align: start;
`

export const SubmitButton = styled.button`
  ${text_l}
  font-family: 'Dancing Script', cursive;
  border-radius: 8px;
  padding: 3px;
  border: none;
  width: 200px;
  color: white;
  background: #ffafbd;
  cursor: pointer;
  margin-top: 30px;
  &:hover{
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) transparent;
  }
  &:disabled {
    background:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) #ffafbd;
    opacity: 0.3;
  }
  ${mq.lessThan('md')}{
    width: 150px;
  }
`