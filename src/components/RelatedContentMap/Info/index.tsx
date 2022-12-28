import React, { useState } from "react";
import {
    Container,
    Figure,
    Image,
    TitleWrapper,
    HeaderWrapper
} from "./StyledInfo";
import {Grid} from "@mui/material";
import Arrow from "../../../utils/icons/Arrow";
import {
    TitleBanner
} from "./StyledInfo";
import {
    getLink
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
                        />
                    </Figure>
                </Grid>
                <Grid item xs={12 - col} sm={8} md={8}>
                    <TitleWrapper>
                        <Pin color={"#C33D14"}/>
                        {item.title}
                    </TitleWrapper>
                    <HeaderWrapper>
                            <TitleBanner href={linkObject.url} target={linkObject.target}>
                                {item.description}
                                <Arrow ariaHidden={true} />
                            </TitleBanner>
                    </HeaderWrapper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Info