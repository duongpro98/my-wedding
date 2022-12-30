import styled, {css} from "styled-components";
import {heading_l, heading_xxl, text_l, text_s} from "../../../utils/styles";
import {mq} from "../../../utils/styles";

export const FormContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/my-wedding/images/anh_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .not-show-up{
    max-height: 0px;
    opacity: 0;
    overflow: hidden;
  }
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
  margin: 20px 0px 50px 0px;
  font-family: 'Dancing Script', cursive;
`

export const Description = styled.div`
  ${text_l}
  font-family: 'Dancing Script', cursive;
  margin-top: 20px;
  color: white;
`

export const Notice = styled.div<any>`
  ${heading_l}
  font-family: 'Quicksand', sans-serif;
  margin-top: 20px;
  text-transform: uppercase;
  margin: 20px 0px 0px 0px;
  color: ${props => props.isSuccess ? '#ffafbd': '#eb3349'};
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
  display: flex;
  font-family: 'Dancing Script', cursive;
  border-radius: 8px;
  padding: 3px 16px;
  border: none;
  color: white;
  background: #ffafbd;
  cursor: pointer;
  margin: 30px 0px 0px 0px;
  &:hover{
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) transparent;
  }
  
  @media screen and (max-width: 843px) {
    margin-left: 0px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 843px) {
    flex-direction: column;
  }
`

export const QRContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  max-height: 500px;
  transition: max-height 0.3s, opacity 2s;
  ${mq.lessThan('md')}{
    max-height: 400px;
  }
  ${mq.lessThan('sm')}{
    max-height: 820px;
    flex-direction: column;
  }
`

export const QRComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QRText = styled.div`
  ${text_l};
  color: white;
  font-family: 'Dancing Script', cursive;
  ${mq.lessThan('md')}{
    font-size: 26px;
  }
`

export const ImageQR = styled.img`
   width: 250px;
   height: 400px;
   object-fit: cover;
   border-radius: 10px;
   margin: 0px 20px 0px 10px;
   
   ${mq.lessThan('md')}{
    width: 200px;
    height: 350px;
   }
`