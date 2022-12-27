import styled from 'styled-components';
import {
    heading_s,
    heading_xl,
    mq,
    svg,
    text_s
} from '../../../utils/styles';
import { spacing } from "../../../utils/props";
import { NavLink } from 'react-router-dom';
import {heading_m, text_m} from "../../../utils/styles";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 428px;
  ${mq.lessThan('md')}{
   width: 312px;
  }
  ${mq.lessThan('sm')}{
   width: 240px;
  }
`;

export const Figure = styled.figure`
  display: block;
  height: 100%;
  & img{
      border-radius: 50%;
  }
  margin: 0;
  @media print {
    width: 50%;
    height: 50%;
  }
`;

export const Image = styled.img<any>`
  width: 128px;
  height: 128px;
  ${mq.lessThan('md')}{
    width: 88px;
    height: 88px;
  }
  object-fit: cover;
  font-family: 'object-fit: cover;';
  @media print {
    width: 50%;
    left: 25%;
  }
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXd3uHqnaHGAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==");
  border-radius: 4px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  ${text_m}
  color: #C33D14;
  ${({theme}) => spacing({theme, mx: 0, mt: 0, mb: 1})}
  & svg {
    min-width: 24px;
    max-width: 24px;
    margin-right: 6px;
  }
  
  ${mq.lessThan('md')}{
    align-items: flex-start;
    & svg {
      min-width: 20px;
      max-width: 20px;
      ${({theme}) => spacing({theme, mr: 1})}
    }
  }
`

export const HeaderWrapper = styled.div`
  text-align: start;
  & svg {
    margin-left: 10px;
    width: 14px;
    ${({theme}) => spacing({theme, ml: 1})}
    fill: #188838;
  }
`

export const LinkIconBannerContainer = styled(NavLink)`
  display: block;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${({theme}) => theme.card.action};
  }
  
  &:focus {
    outline: 0;
    border: 0;
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme}) => theme.colors.element.focused};
  }
`;

export const TitleBanner = styled.a`
  ${heading_m}
  text-decoration: none;
  color: black;
  &:hover{
    color: #188838
  }
`

export const TitleIconWrapper = styled.span`
  white-space: nowrap;
  line-height: 0;
`;

export const ArrowBannerWrapper = styled.span`
  ${svg(14, 14)}
  width: 11.67px;
  display: inline-block;

  ${mq('md')} {
    width: 14px;
  }
`;