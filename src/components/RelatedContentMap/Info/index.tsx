import React, { useState } from "react";
import {
    Container,
    Figure,
    Image,
    TitleWrapper,
    HeaderWrapper
} from "./StyledInfo";
import {Grid} from "@mui/material";
import { imagePlaceholderSrc } from "../../../utils/styles";
import {
    convertSrcJss,
    createSrcSet
} from "../../../utils/media";
import Arrow from "../../../utils/icons/Arrow";
import NavLink from "../../NavItem";
import {
    ArrowBannerWrapper,
    LinkIconBannerContainer,
    TitleBanner,
    TitleIconWrapper
} from "./StyledInfo";
import {
    getLink,
    isValidLinkObject
} from "../../../utils/helpers/link";
import Pin from "../../../utils/icons/Pin";

interface infoProps{
    item: any
}
const Info:React.FC<infoProps> = ({ item }) => {
    const [col, setCol] = useState(5);

    window.addEventListener("resize", () => {
        if(window.innerWidth < 575){
            setCol(5)
        }else {
            setCol(4)
        }
    });

    const linkObject = getLink(item.link);
    console.log(linkObject)

    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={col} sm={4} md={4}>
                    <Figure id="imagecolumn">
                        <Image
                            className="lazyload"
                            draggable={false}
                            src={item?.image?.value?.src}
                            alt={item?.image?.value?.alt || ''}
                            // dataSrc={convertSrcJss(item?.image?.value?.src) + '?mw=1200'}
                            // dataSrcset={createSrcSet(item?.image?.value?.src, [640, 1200, 1600])}
                            // field={
                            //     {
                            //         value: {
                            //             src: imagePlaceholderSrc,
                            //             alt: item?.image?.value?.alt || '',
                            //             'data-src': convertSrcJss(item?.image?.value?.src) + '?mw=1200',
                            //             'data-srcset': createSrcSet(item?.image?.value?.src, [640, 1200, 1600])
                            //         }
                            //     }
                            // }
                        />
                    </Figure>
                </Grid>
                <Grid item xs={12 - col} sm={8} md={8}>
                    <TitleWrapper>
                        <Pin color={"#C33D14"}/>
                        {item.title}
                    </TitleWrapper>
                    <HeaderWrapper>
                        {/*<NavLink StyledLink={LinkIconBannerContainer} link={linkObject}>*/}
                            <TitleBanner href={linkObject.url} target={linkObject.target}>
                                {item.description}
                                <Arrow ariaHidden={true} />
                            </TitleBanner>
                        {/*</NavLink>*/}
                    </HeaderWrapper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Info