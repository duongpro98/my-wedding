import styled from 'styled-components';
import { spacing } from "../../utils/props";
import { mq } from "../../utils/styles";
import {
  heading_l,
  text_m
} from "../../utils/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => spacing({ theme, px: 6, py: 7 })}
`

export const Title = styled.div`
  ${heading_l}
  font-family: 'Dancing Script', cursive;
  margin-bottom: 20px;
`

export const Description = styled.div`
  ${text_m}
  ${({ theme }) => spacing({ theme, mb: 3, mt: 0 })}
`

export const MapContainer = styled.div`
  width: 100%;
  ${mq('xs')}{
     height: 397.15px;
  }
  ${mq('sm')}{
     height: 500px;
  }
  ${mq('md')}{
     height: 500px;
  }
`;

export const LocationButton = styled.button`
  width: 40px;
  cursor: pointer;
  height: 40px;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #041C2C;
  border-radius: 8px;
  margin-top: 16px;
  & svg {
   width: 24px;
  }
`
export const ZoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const ZoomButton = styled.button`
  width: 40px;
  cursor: pointer;
  height: 40px;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
  ${({ theme }) => spacing({ theme, p: 1 })}
  border: 1px solid #041C2C;
  & svg {
   width: 24px;
  }
  &:first-child{
     border-top-left-radius: 8px;
     border-top-right-radius: 8px;
     border-bottom: none;
  }
  &:last-child{
     border-bottom-left-radius: 8px;
     border-bottom-right-radius: 8px;
  }
`

