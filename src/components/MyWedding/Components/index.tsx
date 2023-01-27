import React, {useEffect, useState} from "react";
import {Components, Birthday, Component, Content, HeartWrapper, ImageAvatar, Name} from "../StyledMyWedding";
import Heart from "../../../utils/icons/Heart";
import {Skeleton} from "@mui/material";

interface listComponentsProps{
    listLoaded: any,
    handleLoad: any
}

const ListComponents:React.FC<listComponentsProps> = ({ listLoaded, handleLoad }) => {
    const [height, setHeight] = useState(350);
    const [height2, setHeight2] = useState(350);

    let resizeWindow = () => {
        const width = document!.getElementById("imagecolumn")!.getBoundingClientRect().width;
        const width2 = document!.getElementById("imagecolumn2")!.getBoundingClientRect().width;
        setHeight(width);
        setHeight2(width2);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, [listLoaded]);

    return (
        <Components>
            <Component height1={height} height2={height2}>
                <ImageAvatar
                    id="imagecolumn"
                    src="/my-wedding/images/av_husband.jpg"
                    onLoad={() => handleLoad("ava_husband")}
                    style={{
                        display: !listLoaded.includes("ava_husband")? "none": ""
                    }}
                />
                <Skeleton id="imagecolumn2" variant="circular" sx={{
                    width: '100%',
                    height: '100%',
                    display: listLoaded.includes("ava_husband")? "none": ""
                }}/>
                <Content>
                    <Name>Đỗ Xuân Dương</Name>
                    <Birthday>11/08/1998</Birthday>
                </Content>
            </Component>
            <HeartWrapper>
                <Heart/>
            </HeartWrapper>
            <Component height1={height} height2={height2}>
                <ImageAvatar
                    id="imagecolumn"
                    src="/my-wedding/images/av_wife.jpg"
                    onLoad={() => handleLoad("ava_wife")}
                    style={{
                        display: !listLoaded.includes("ava_wife")? "none": ""
                    }}
                />
                <Skeleton id="imagecolumn2" variant="circular" sx={{
                    width: '100%',
                    height: '100%',
                    display: listLoaded.includes("ava_wife")? "none": ""
                }}/>
                <Content>
                    <Name>Nguyễn Gia Hân</Name>
                    <Birthday>19/05/1998</Birthday>
                </Content>
            </Component>
        </Components>
    )
}

export default ListComponents;