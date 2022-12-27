import styled, {css} from "styled-components";
import {mq} from "../../utils/styles";


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #F2EDED;
   position: relative;
   font-family: 'Dancing Script', cursive;
`

export const ContainerHeader = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const CountdownWrapper = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  z-index: 2;
`

export const Timer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid #ffafbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: border 0.5s;
  flex-wrap: wrap;
  &:hover{
    border: 2px solid #753a88;
  }
  ${mq.lessThan('md')}{
    width: 80px;
    height: 80px;
  }
  ${mq.lessThan('sm')}{
    border: none;
  }
`

export const TimerNumber = styled.div`
  color: white;
  font-size: 28px;
  font-weight: bold;
  ${mq.lessThan('md')}{
    font-size: 20px;
  }
`

export const TimerText = styled.div`
   color: white;
   font-size: 12px;
   font-style: italic;
`

export const BigHeader = styled.div`
    color: white;
    font-style: italic;
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 50px;
`

export const Header = styled.div`
    color: white;
    font-style: italic;
    font-size: 39px;
    font-weight: bold;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    & svg{
       margin: 0px 10px;
    }
`

export const Notice = styled.div`
    color: white;
    font-size: 26px;
    font-style: italic;
`
export const ComponentsWrapper = styled.div`
   width: 100%;
   background: #F2EDED;
`

export const Components = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 500px;
    width: 90%;
    margin-top: 50px;
    margin-bottom: 50px;
    ${mq.lessThan('md')}{
       flex-direction: column;
    }
`

export const HeartWrapper = styled.div`
    & svg{
        width: 56px;
        height: 56px;
        animation: beat .51s infinite alternate;
    }
    
    ${mq.lessThan('lg')}{
       & svg{
        width: 32px;
        height: 32px;
       }
    }
    
    ${mq.lessThan('md')}{
       & svg{
        width: 56px;
        height: 56px;
        margin-top: 50px;
       }
    }
    
    @keyframes beat{
        to { transform: scale(1.4); }
    }
`

export const Component = styled.div<any>`
    display: flex;
    flex-direction: column;
    align-items: center;
    & img{
        border-radius: 50%;
        height: ${(props: any) => props.height ? props.height + 'px' : ''}
    }
    ${mq('xs')}{
        width: 80%;
        margin-top: 50px;
    }
    ${mq('sm')}{
        width: 60%;
    }
    ${mq('md')}{
        width: 35%;
        margin-top: 0px;
    }
    ${mq('lg')}{
        width: 35%;
    }
    ${mq('xl')}{
        width: 30%;
    }
`

export const Image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`

export const ImageDefault = styled.img`
  ${Image}
`

export const ImageAvatar = styled.img`
  ${Image}
  border: 3px solid #ffafbd;
  padding: 3px;
  &:hover{
     border: 3px solid red;
     transition: border-width 0.1s ease-in;
  }
`

export const ImageFlower = styled.img`
  ${Image}
`

export const ImageAlbum = styled.img`
  ${Image}
  transition: transform 0.5s;
  overflow: hidden;
  &:hover{
    transform: scale(0.9);
  }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Name = styled.div`
    font-size: 26px;
    color: black;
    font-weight: bold;
    margin-top: 20px;
`

export const Birthday = styled.div`
    font-size: 20px;
    color: black;
    font-style: italic;
    margin-top: 20px;
`

export const IconGroup = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    & svg{
        margin: 10px;
        width: 20px;
        &:first-child{
            width: 15px;
        }
        &:last-child{
            min-width: 30px;
        }
    }
`

export const ImageShowUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) transparent;
    & img{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 95vh;
      user-select: none;
      ${mq.lessThan('lg')}{
        width: 70%;
      }
      ${mq.lessThan('md')}{
        width: 90%;
      }
      
    }
    
    & .image-slide-left{
       left: 0%;
       opacity: 0;
       width: 0;
       border: none;
       transition: all 0.5s, width 3s;
    }
    
    & .image-slide-right{
       left: 100%;
       opacity: 0;
       width: 0;
       border: none;
       transition: all 0.5s, width 3s;
    }
    z-index: 3;
`

export const SlideButtonWrapper = styled.div<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)) transparent;
    cursor: pointer;
    &:hover{
      background: white;
      & svg {
        min-width: 38px;
        fill: black;
        transition: min-width 0.2s;
      }
      transition: background-color 1s;
    }
    position: fixed;
    top: 50%;
    left: ${(props: any) => props.position === "left" ? "5%": "95%"};
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    & svg{
      min-width: 24px;
      fill: white;
    }
    z-index: 4;
`

export const CloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    cursor: pointer;
    top: 5%;
    left: 96%;
    transform: translate(-50%, -50%);
    & svg{
      min-width: 32px;
    }
    z-index: 4;
`

export const ListImageContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: 10px;
  border-radius: 10px;
  width: 60%;
`

export const AddressWrapper = styled.div`
  background: #F2EDED;
  width: 100%;
  margin-top: 50px;
`

export const FormContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`

export const ImageAlbumWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  with: 60px;
  height: 60px;
  & img{
    &:hover{
        border: none;
        cursor: default;
    }
  }
`
export const AlbumHeader = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin: 30px 0px;
`
export const AlbumDescription = styled.div`
  font-size: 22px;
  font-style: italic;
  color: black;
  margin-bottom: 30px;
`