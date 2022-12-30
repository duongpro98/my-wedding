import styled from "styled-components";
import {heading_l} from "../../../utils/styles";
import {mq} from "../../../utils/styles";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
`

export const Header = styled.div<any>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    ${mq.lessThan('sm')}{
        flex-direction: column;
    }
`

export const HeaderText = styled.div`
   ${heading_l} 
`

export const ImageAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffafbd;
  padding: 3px;
  ${mq.lessThan('md')}{
      width: 50px;
      height: 50px;
   }
`

export const Image = styled.img`
   width: 24px;
   height: 24px;
   object-fit: cover;
   margin: 0px 20px 0px 10px;
   ${mq.lessThan('md')}{
      margin: 0px 10px;
      width: 20px;
      height: 20px;
   }
   ${mq.lessThan('sm')}{
      margin: 10px 0px;
   }
`

export const ImageContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-image: url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`

export const ImageTest = styled.img`
   min-width: auto;
   object-fit: contain;
   max-height: 900px;
   border-radius: 10px;
`